import type { RefObject } from "react";

/** Sphere geometry, local surface maps, atmospheric shells, and a travelling camera. */
export async function mountPlanetScene(
  host: HTMLDivElement,
  progress: RefObject<number>,
  motion: RefObject<boolean>,
) {
  const THREE = await import("three");
  let renderer: InstanceType<typeof THREE.WebGLRenderer>;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    return () => {};
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 150);
  scene.add(new THREE.AmbientLight(0x97b8e0, 1.25));
  const sun = new THREE.DirectionalLight(0xe2eeff, 3.5);
  sun.position.set(-6, 8, 5);
  scene.add(sun);
  const geometry = new THREE.SphereGeometry(3.8, 96, 64);
  const loader = new THREE.TextureLoader();
  const textures: InstanceType<typeof THREE.Texture>[] = [];
  let disposed = false;
  const planets = ["earth", "venus", "mars"].map((name, i) => {
    const map = loader.load(`/textures/${name}.jpg`, () => {
      if (!disposed) host.classList.add("is-ready");
    });
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    textures.push(map);
    const planet = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({ map, roughness: 0.92, metalness: 0.02 }),
    );
    const group = new THREE.Group();
    group.add(planet);
    group.position.set(i * 13, -4.8, 0);
    planet.rotation.set(0.12, i ? 0.5 : 2.5, -0.12);
    const atmosphere = new THREE.Mesh(
      geometry,
      new THREE.ShaderMaterial({
        uniforms: {
          glowColor: {
            value: new THREE.Color([0x6db8ff, 0xefc78d, 0xde967b][i]),
          },
        },
        vertexShader: `varying vec3 vNormal; varying vec3 vPosition; void main(){vec4 p=modelViewMatrix*vec4(position,1.0);vNormal=normalize(normalMatrix*normal);vPosition=p.xyz;gl_Position=projectionMatrix*p;}`,
        fragmentShader: `varying vec3 vNormal; varying vec3 vPosition; uniform vec3 glowColor; void main(){float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(-vPosition))),3.5);gl_FragColor=vec4(glowColor,rim*0.58);}`,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    atmosphere.scale.setScalar(1.008);
    group.add(atmosphere);
    scene.add(group);
    return { group, planet, atmosphere };
  });
  let seed = 47;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const starsGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(1800 * 3);
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (random() - 0.3) * 100;
    positions[i + 1] = (random() - 0.5) * 65;
    positions[i + 2] = -10 - random() * 50;
  }
  starsGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xc0d8f7,
    size: 0.035,
    transparent: true,
    opacity: 0.75,
  });
  scene.add(new THREE.Points(starsGeometry, starsMaterial));
  const resize = () => {
    renderer.setSize(host.clientWidth, host.clientHeight);
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();
  let visible = true;
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  visibility.observe(host);
  let current = progress.current;
  let previousTime = 0;
  let frame = 0;
  const smoothstep = (x: number) => {
    const n = Math.max(0, Math.min(1, x));
    return n * n * (3 - 2 * n);
  };
  function render(time: number) {
    frame = requestAnimationFrame(render);
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    if (!visible || document.hidden) return;
    current += (progress.current - current) * (motion.current ? 0.075 : 1);
    const travel =
      smoothstep((current - 0.19) / 0.16) + smoothstep((current - 0.53) / 0.16);
    camera.position.set(
      travel * 13,
      0.1,
      (camera.aspect < 0.7 ? 7.2 : 5.7) +
        Math.sin(current * Math.PI) * 1.1 -
        smoothstep((current - 0.82) / 0.18) * 1.7,
    );
    camera.lookAt(travel * 13, 0, 0);
    sun.position.x = travel * 13 - 6;
    sun.target.position.x = travel * 13;
    sun.target.updateMatrixWorld();
    planets.forEach(({ planet, group }) => {
      group.position.y = -4.8 + Math.sin(current * Math.PI) * 0.45;
      if (motion.current) planet.rotation.y += delta * 0.025;
      group.rotation.z = current * 0.07;
    });
    renderer.render(scene, camera);
  }
  frame = requestAnimationFrame(render);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    visibility.disconnect();
    geometry.dispose();
    starsGeometry.dispose();
    starsMaterial.dispose();
    textures.forEach((texture) => texture.dispose());
    planets.forEach(({ planet, atmosphere }) => {
      planet.material.dispose();
      atmosphere.material.dispose();
    });
    renderer.dispose();
    renderer.domElement.remove();
    host.classList.remove("is-ready");
  };
}
