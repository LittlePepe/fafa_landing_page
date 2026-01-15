import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Lightbulb, Heart, Target, Sparkles } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Conscientização",
        description: "Identifique os gatilhos emocionais que disparam sua compulsão e entenda seus padrões de comportamento alimentar.",
        color: "bg-highlight/10 text-highlight",
    },
    {
        number: "02",
        icon: Heart,
        title: "Ressignificação",
        description: "Transforme sua relação emocional com a comida, eliminando culpas e desenvolvendo uma conexão saudável com seu corpo.",
        color: "bg-primary/10 text-primary",
    },
    {
        number: "03",
        icon: Target,
        title: "Reprogramação",
        description: "Substitua padrões de autossabotagem por novos hábitos mentais que sustentam naturalmente o emagrecimento.",
        color: "bg-accent/10 text-accent",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Manutenção",
        description: "Desenvolva autonomia emocional para manter o peso ideal de forma natural, sem sofrimento ou restrições extremas.",
        color: "bg-primary/10 text-primary",
    },
];

const benefits = [
    "Sem dietas restritivas ou contagem de calorias",
    "Fim da culpa e da relação de guerra com a comida",
    "Emagrecimento sustentável e definitivo",
    "Maior autoconhecimento e equilíbrio emocional",
    "Liberdade para comer sem compulsão",
    "Paz com o corpo e o espelho",
    "Alívio da ansiedade, da sobrecarga e do medo",
];

const MethodSection = () => {
    return (
        <section className="bg-card py-12 md:py-20 px-4 md:px-6">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                >
                    <span className="inline-block text-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                        O Método
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Emagrecimento pela{" "}
                        <span className="text-primary italic">Reprogramação Mental</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
                        Um passo a passo em 4 fases que trata a raiz — a verdadeira causa que te levou ao peso de hoje.
                        Unindo neurociência, PNL, gestão de emoções e construção de novos hábitos, você transforma seu
                        relacionamento com a comida e com o seu corpo, de forma leve e definitiva.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-background rounded-xl md:rounded-2xl p-4 md:p-6 h-full border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                                <span className="font-display text-2xl md:text-4xl font-bold text-primary/20 mb-2 md:mb-4 block">
                                    {step.number}
                                </span>
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${step.color} flex items-center justify-center mb-3 md:mb-4`}>
                                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="font-display text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow connector */}
                            {index < steps.length - 1 && (
                                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/30 z-10" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl md:rounded-3xl p-5 md:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 text-center lg:text-left">
                                O que você vai conquistar
                            </h3>
                            <div className="space-y-3 md:space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-2 md:gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-foreground">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-medium">
                                <p className="font-display text-base md:text-xl text-foreground mb-4 md:mb-6">
                                    "Este não é mais um programa de emagrecimento. É uma jornada de
                                    <span className="text-primary font-semibold"> transformação interior </span>
                                    que reflete no seu corpo."
                                </p>
                                <Button variant="hero" size="lg" className="w-full">
                                    Quero começar minha transformação
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MethodSection;
