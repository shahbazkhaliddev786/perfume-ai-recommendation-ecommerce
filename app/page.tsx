import AIRecommendations from "@/components/home/ai-recommendation";
import CustomPerfumeRequestSection from "@/components/home/custom-perfume";
import Featured from "@/components/home/featured";
import Hero from "@/components/home/hero";
import MainLayout from "@/components/layout/layout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <AIRecommendations />
        <CustomPerfumeRequestSection />
        <Featured />
      </MainLayout>
    </>
  );
}
