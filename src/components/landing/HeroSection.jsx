import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import fafaSoares from "@/assets/fafa-soares.png";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20 md:pt-24">
            {/* Decorative elements */}
            <div className="absolute top-20 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-4 md:right-10 w-32 md:w-48 h-32 md:h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="container-wide px-4 md:px-6 py-8 md:py-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-120px)] md:min-h-[80vh]">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-secondary/80 text-secondary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6"
                        >
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-highlight" />
                            <span className="text-xs md:text-sm font-medium">Emagrecimento exclusivo para mulheres</span>
                        </motion.div>

                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6">
                            Você não precisa de{" "}
                            <span className="text-primary">mais uma dieta</span>
                            <br />
                            <span className="italic font-medium">precisa reprogramar sua mente</span>
                        </h1>

                        <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                            Descubra o método de emagrecimento que já transformou centenas de mulheres:
                            emagreça tratando a causa real do seu peso — suas emoções e comportamentos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                                <Heart className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
                                Quero emagrecer de verdade
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Entenda o método
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-border/50"
                        >
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">500+</p>
                                <p className="text-xs md:text-sm text-muted-foreground">Mulheres transformadas</p>
                            </div>
                            <div className="w-px h-8 md:h-10 bg-border hidden sm:block" />
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">97%</p>
                                <p className="text-xs md:text-sm text-muted-foreground">Satisfação</p>
                            </div>
                            <div className="w-px h-8 md:h-10 bg-border hidden sm:block" />
                            <div className="text-center">
                                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">15+</p>
                                <p className="text-xs md:text-sm text-muted-foreground">Anos de experiência</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl" />

                            <div className="relative rounded-3xl overflow-hidden shadow-medium">
                                <img
                                    src={fafaSoares}
                                    alt="Fafá Soares - Psicanalista clínica e especialista em emagrecimento feminino"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Floating card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 bg-card/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-soft"
                                >
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-display text-sm md:text-base font-semibold text-foreground">Psicanalista clínica</p>
                                            <p className="text-xs md:text-sm text-muted-foreground">Especialista em emagrecimento feminino</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
