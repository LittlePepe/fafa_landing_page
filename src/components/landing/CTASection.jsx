import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20 px-4 md:px-6 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="container-narrow relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-6 md:mb-8">
                        <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse-soft" />
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Chegou a hora de{" "}
                        <span className="text-primary italic">se libertar</span>
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 px-2">
                        Você não precisa carregar esse peso — literal e emocional — por mais tempo.
                        Dê o primeiro passo para uma transformação que vai muito além da balança.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
                        <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                            Falar com a Fafa
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-soft border border-border/50 max-w-xl mx-auto"
                    >
                        <p className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                            Primeira conversa sem compromisso
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Agende uma conversa inicial para entender se o método é certo para você.
                            Sem pressão, apenas um bate-papo acolhedor para conhecer sua história.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
