import Featured from "@/components/home/featured";
import Hero from "@/components/home/hero";
import MainLayout from "@/components/layout/layout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Featured />
      </MainLayout>
    </>
  );
}
