import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import MethodSection from "@/components/landing/MethodSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ProductCards from "@/components/landing/ProductCards";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <ProblemSection />
            <section id="metodo">
                <MethodSection />
            </section>
            <ForWhoSection />
            <section id="sobre">
                <AuthoritySection />
            </section>
            <section id="depoimentos">
                <TestimonialsSection />
            </section>
            <section id="produtos">
                <ProductCards />
            </section>
            <CTASection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default Index;
