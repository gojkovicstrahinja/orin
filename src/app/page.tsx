import SpaceHero from "@/components/space-hero";
import StudioPage from "@/components/studio-page";
import OrinHeader from "@/components/orin-header";
export default function Home() {
  return (
    <>
      <OrinHeader />
      <main>
        <SpaceHero />
        <StudioPage />
      </main>
    </>
  );
}
