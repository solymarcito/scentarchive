import Hero from "@/components/home/Hero";
import ConceptSection from "@/components/home/ConceptSection";
import ProcessSection from "@/components/home/ProcessSection";
import DropTeaser from "@/components/home/DropTeaser";
import IdentityStory from "@/components/home/IdentityStory";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <ProcessSection />
      <DropTeaser />
      <IdentityStory />
      <CTASection />
    </>
  );
}
