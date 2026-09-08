import type { RefObject } from "react";

/** A volumetric ribbon of stardust, with a camera travelling through it. */
export async function mountStarScene(
  host: HTMLDivElement,
  progress: RefObject<number>,
  motion: RefObject<boolean>,
) {
  const THREE = await import("three");
  const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
  // Load before allocating WebGL resources, so a failed asset request cleans up naturally.
  const names = ["aster", "lyra", "solis", "aurora", "nova", "vega"];
  const hues = [0x79caff, 0xb387ff, 0xffc574, 0x68ffe0, 0xff91be, 0x9faaff];
  const models = await Promise.all(names.map((name) => new GLTFLoader().loadAsync(`/models/${name}.glb`)));
  const [{ EffectComposer }, { RenderPass }, { UnrealBloomPass }, { OutputPass }, { RoomEnvironment }] = await Promise.all([
    import("three/addons/postprocessing/EffectComposer.js"),
    import("three/addons/postprocessing/RenderPass.js"),
    import("three/addons/postprocessing/UnrealBloomPass.js"),
    import("three/addons/postprocessing/OutputPass.js"),
    import("three/addons/environments/RoomEnvironment.js"),
  ]);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x01050c);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04);
  scene.environment = environment.texture;
  room.dispose();
  pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 250);
  scene.add(new THREE.HemisphereLight(0xb9dfff, 0x081428, 1.2));
  const keyLight = new THREE.DirectionalLight(0xe8f7ff, 2);
  keyLight.position.set(-3, 5, 8);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x438bff, 1.5);
  rimLight.position.set(5, -1, -6);
  scene.add(rimLight);
  const modelGeometries = new Set<InstanceType<typeof THREE.BufferGeometry>>();
  const modelMaterials = new Set<InstanceType<typeof THREE.Material>>();
  models.forEach((model, index) => model.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      modelGeometries.add(object.geometry);
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        modelMaterials.add(material);
        if (material instanceof THREE.MeshStandardMaterial) {
          material.envMapIntensity = 1.5;
          if (material.name.includes("alloy")) {
            material.color.set(hues[index]).lerp(new THREE.Color(0xffffff), 0.25);
            material.metalness = 0.85;
            material.roughness = 0.2;
            material.emissiveIntensity = 0.12;
          } else if (material.name.includes("inlay")) {
            material.emissiveIntensity = 2.2;
          }
        }
      });
    }
  }));
  const starModels = models.map((model, index) => {
    const group = new THREE.Group();
    const mesh = model.scene;
    mesh.rotation.x = Math.PI / 2;
    group.add(mesh);
    group.userData.sculpture = mesh;
    group.userData.arcs = [];
    mesh.traverse((object) => {
      if (object.name.includes("orbit")) group.userData.arcs.push(object);
    });
    // Each model sits in a different lane; the camera flies between their points.
    group.position.set(index === 0 ? 0 : Math.sin(index * 2.4) * 1.3, 0, -index * 44 - 4);
    scene.add(group);
    return group;
  });
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.35, 0.3, 2.3);
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);
  let seed = 47;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const count = matchMedia("(max-width: 700px)").matches ? 9500 : 18000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const clustered = i > count * 0.2;
    const z = random() * 190;
    const t = random() * Math.PI * 2;
    const radius = (18 + Math.sin(z * 0.07) * 5) * (0.7 + z / 55);
    // An elliptical, broken ribbon frames the copy and changes with depth.
    const spread = (random() + random() + random() - 1.5) * 6 * (0.7 + z / 55);
    positions[i * 3] = clustered ? Math.cos(t) * (radius + spread) * 1.75 : (random() - 0.5) * 130;
    positions[i * 3 + 1] = clustered ? Math.sin(t) * (radius + spread) * 0.68 + Math.cos(t) * 7 : (random() - 0.5) * 85;
    positions[i * 3 + 2] = -z;
    const bright = random();
    colors[i * 3] = 0.25 + bright * 0.55;
    colors[i * 3 + 1] = 0.48 + bright * 0.4;
    colors[i * 3 + 2] = 0.85 + bright * 0.15;
    sizes[i] = random() < 0.007 ? 0.75 + random() * 0.65 : 0.025 + random() * 0.12;
    phases[i] = random() * Math.PI * 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
  const material = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, travel: { value: 0 }, pixelScale: { value: 600 } },
    vertexShader: `
      attribute float size;
      attribute float phase;
      attribute vec3 color;
      uniform float time;
      uniform float travel;
      uniform float pixelScale;
      varying vec3 tint;
      varying float alpha;
      void main() {
        vec3 p = position;
        // Recycle behind the far plane without ever popping near the camera.
        p.z = -mod(-p.z - travel + 190.0, 190.0);
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = clamp(size * pixelScale / -view.z, 1.0, 65.0);
        tint = color;
        alpha = smoothstep(0.0, 8.0, -p.z) * (1.0 - smoothstep(130.0, 190.0, -p.z));
        alpha *= 0.78 + 0.22 * sin(time * 0.65 + phase);
      }`,
    fragmentShader: `
      varying vec3 tint;
      varying float alpha;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float core = exp(-d * d * 95.0);
        float halo = exp(-d * d * 14.0) * 0.17;
        float rays = (exp(-abs(uv.x) * 95.0) + exp(-abs(uv.y) * 95.0)) * pow(max(0.0, 1.0 - d * 2.0), 3.0) * 0.4;
        gl_FragColor = vec4(tint, (core + halo + rays) * alpha);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const stars = new THREE.Points(geometry, material);
  stars.frustumCulled = false;
  scene.add(stars);

  // Soft blue clouds occupy actual depths alongside the individual stars.
  const cloudCanvas = document.createElement("canvas");
  cloudCanvas.width = cloudCanvas.height = 128;
  const context = cloudCanvas.getContext("2d")!;
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(92,155,255,0.22)");
  gradient.addColorStop(0.3, "rgba(34,91,185,0.12)");
  gradient.addColorStop(1, "rgba(0,20,80,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const cloudTexture = new THREE.CanvasTexture(cloudCanvas);
  const glowMaterial = new THREE.SpriteMaterial({ map: cloudTexture, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.3 });
  starModels.forEach((star, index) => {
    const tintedGlow = glowMaterial.clone();
    tintedGlow.color.set(hues[index]);
    modelMaterials.add(tintedGlow);
    const glow = new THREE.Sprite(tintedGlow);
    glow.scale.set(13, 13, 1);
    star.add(glow);
    const dustGeometry = new THREE.BufferGeometry();
    const dust = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      const angle = random() * Math.PI * 2;
      const radius = 1.7 + random() * 1.2;
      dust[i * 3] = Math.cos(angle) * radius;
      dust[i * 3 + 1] = Math.sin(angle) * radius * (0.55 + index * 0.055);
      dust[i * 3 + 2] = (random() - 0.5) * 1.7;
    }
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dust, 3));
    const dustMaterial = new THREE.PointsMaterial({ color: hues[index], size: 0.018, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending, depthWrite: false });
    const satellites = new THREE.Points(dustGeometry, dustMaterial);
    star.userData.satellites = satellites;
    star.add(satellites);
    modelGeometries.add(dustGeometry);
    modelMaterials.add(dustMaterial);
  });
  const cloudMaterial = new THREE.SpriteMaterial({ map: cloudTexture, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.5 });
  const clouds = Array.from({ length: 65 }, () => {
    const cloud = new THREE.Sprite(cloudMaterial.clone());
    const t = random() * Math.PI * 2;
    const z = random() * 190;
    const radius = (18 + Math.sin(z * 0.07) * 5) * (0.7 + z / 55);
    cloud.position.set(Math.cos(t) * radius * 1.75, Math.sin(t) * radius * 0.68 + Math.cos(t) * 7, -z);
    cloud.scale.set(8 + random() * 9, 3 + random() * 5, 1);
    cloud.userData.depth = z;
    scene.add(cloud);
    return cloud;
  });
  const slot = host.parentElement?.querySelector(".hero-star-window");
  let slopeY = 0;
  const resize = () => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    renderer.setSize(width, height);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    material.uniforms.pixelScale.value = height * renderer.getPixelRatio();
    const slotRect = slot?.getBoundingClientRect();
    const hostRect = host.getBoundingClientRect();
    const centerY = slotRect ? (slotRect.top + slotRect.height / 2 - hostRect.top) / height : 0.48;
    slopeY = (0.5 - centerY) * 2 * Math.tan(THREE.MathUtils.degToRad(29));
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  if (slot) observer.observe(slot);
  resize();
  let visible = true;
  const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
  visibility.observe(host);
  let current = progress.current;
  let previousTime = 0;
  let elapsed = 0;
  let frame = 0;
  function render(time: number) {
    frame = requestAnimationFrame(render);
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    if (!visible || document.hidden) return;
    if (motion.current) {
      elapsed += delta;
      current += (progress.current - current) * (1 - Math.exp(-delta * 5));
    }
    const travel = current * 115 + elapsed * 0.45;
    material.uniforms.time.value = elapsed;
    material.uniforms.travel.value = travel;
    camera.position.set(Math.sin(current * Math.PI * 2) * 1.4, 0, 10);
    camera.lookAt(camera.position.x, 0, -60);
    starModels.forEach((star, index) => {
      star.position.z = -index * 44 - 4 + current * 115;
      const depth = 10 - star.position.z;
      star.position.y = slopeY * depth;
      star.rotation.y = Math.sin(elapsed * 0.3 + index) * 0.48;
      star.rotation.z = Math.sin(elapsed * (0.12 + index * 0.025) + index * 2) * 0.25;
      star.userData.satellites.rotation.z = elapsed * (index % 2 ? -0.075 : 0.055);
      (star.userData.arcs as InstanceType<typeof THREE.Object3D>[]).forEach((arc, i) => {
        arc.rotation.y = elapsed * (0.13 + i * 0.045) * (index % 2 ? -1 : 1);
      });
      // Steer the opening star gently aside during the approach.
      star.position.x = index === 0 ? -current * 9 : Math.sin(index * 2.4) * 1.3;
      star.visible = depth > 0.3;
    });
    clouds.forEach((cloud) => {
      cloud.position.z = -((cloud.userData.depth - travel % 190 + 190) % 190);
      const depth = -cloud.position.z;
      cloud.material.opacity = 0.5 * Math.min(1, depth / 12) * Math.min(1, (190 - depth) / 35);
    });
    composer.render();
    host.classList.add("is-ready");
  }
  frame = requestAnimationFrame(render);
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    visibility.disconnect();
    geometry.dispose();
    material.dispose();
    cloudTexture.dispose();
    clouds.forEach((cloud) => cloud.material.dispose());
    cloudMaterial.dispose();
    glowMaterial.dispose();
    modelGeometries.forEach((geometry) => geometry.dispose());
    modelMaterials.forEach((material) => material.dispose());
    environment.dispose();
    bloomPass.dispose();
    outputPass.dispose();
    renderPass.dispose();
    composer.dispose();
    renderer.dispose();
    renderer.domElement.remove();
    host.classList.remove("is-ready");
  };
}
