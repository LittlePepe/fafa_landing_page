import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import fafaSoares from "@/assets/fafa-soares.png";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
            {/* Neo-Natural Background Elements */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

            <div className="container-wide px-4 md:px-6 relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-0">

                {/* Massive Typography Content - Asymmetric Left */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[55%] relative z-20 flex flex-col justify-center pr-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/50 backdrop-blur-sm border border-border/50 mb-8 w-fit"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Psicanálise & Emagrecimento</span>
                    </motion.div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.1] font-bold text-foreground tracking-tight mb-8">
                        Você não precisa de <br />
                        <span className="text-primary bg-clip-text bg-gradient-rose italic font-light pr-4">
                            mais uma dieta
                        </span>
                        <br />
                        <span className="block mt-2">
                            precisa reprogramar sua mente
                        </span>
                    </h1>

                    <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 border-l-2 border-primary/30 pl-6">
                        Descubra o método de emagrecimento que já transformou centenas de mulheres: emagreça tratando a causa real do seu peso — suas emoções e comportamentos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="hero" size="xl" className="group text-lg w-full sm:w-auto">
                            Quero emagrecer de verdade
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="ghost" size="xl" className="text-lg hover:bg-secondary/50 w-full sm:w-auto">
                            Conhecer o método
                        </Button>
                    </div>
                </motion.div>

                {/* Image - Asymmetric Right - No Overlap */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-[45%] relative z-10 mt-12 lg:mt-0"
                >
                    <div className="relative">
                        {/* Sharp Geometric Frame */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 h-full w-full lg:h-[120%] lg:-bottom-[20%]" />

                        <img
                            src={fafaSoares}
                            alt="Fafá Soares"
                            className="w-full h-auto object-cover relative z-10 mask-image-gradient rounded-tr-[5rem] lg:rounded-tr-[10rem]"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />

                        {/* Floating Stat Card - Sharp Geometry */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute top-1/4 -left-4 lg:-left-12 bg-card/80 backdrop-blur-md p-6 border border-white/20 shadow-medium max-w-[200px] z-30"
                        >
                            <p className="font-display text-4xl font-bold text-primary mb-1">500+</p>
                            <p className="text-sm text-muted-foreground leading-tight">Mulheres transformadas através da psicanálise.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
