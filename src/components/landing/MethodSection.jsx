import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Lightbulb, Heart, Target, Sparkles } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Lightbulb,
        title: "Conscientização",
        description: "Identifique os gatilhos emocionais que disparam sua compulsão e entenda seus padrões de comportamento alimentar.",
        color: "text-highlight",
        bg: "bg-highlight/10",
    },
    {
        number: "02",
        icon: Heart,
        title: "Ressignificação",
        description: "Transforme sua relação emocional com a comida, eliminando culpas e desenvolvendo uma conexão saudável com seu corpo.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        number: "03",
        icon: Target,
        title: "Reprogramação",
        description: "Substitua padrões de autossabotagem por novos hábitos mentais que sustentam naturalmente o emagrecimento.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Manutenção",
        description: "Desenvolva autonomia emocional para manter o peso ideal de forma natural, sem sofrimento ou restrições extremas.",
        color: "text-primary",
        bg: "bg-primary/10",
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
        <section className="bg-card py-20 md:py-32 px-4 md:px-6 overflow-hidden">
            <div className="container-narrow relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        O Método
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Emagrecimento pela <br />
                        <span className="text-primary italic font-light">Reprogramação Mental</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Um processo profundo em 4 fases para tratar a raiz do problema.
                    </p>
                </motion.div>

                {/* Vertical Organic Timeline */}
                <div className="relative space-y-24 before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent before:h-full before:z-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content */}
                            <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${step.bg} ${step.color} shadow-soft`}>
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>

                            {/* Center Marker */}
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-card shadow-medium shrink-0">
                                <div className={`w-3 h-3 rounded-full ${step.bg.replace('/10', '')}`} />
                            </div>

                            {/* Number (Decorative) */}
                            <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                                <span className="font-display text-[8rem] leading-none font-bold text-border/20 select-none">
                                    {step.number}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Section - Integrated */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 bg-background rounded-[2rem] p-8 md:p-16 shadow-2xl border border-border/50 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                                O que você vai conquistar
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-lg text-foreground/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card/50 p-8 rounded-3xl border border-border/50 text-center">
                            <p className="font-display text-2xl text-foreground mb-8 leading-relaxed">
                                "Este não é mais um programa de emagrecimento. É uma jornada de
                                <span className="text-primary font-semibold italic"> transformação interior </span>
                                que reflete no seu corpo."
                            </p>
                            <Button variant="hero" size="xl" className="w-full text-lg">
                                Quero começar minha transformação
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MethodSection;
