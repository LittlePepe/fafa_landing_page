import { motion } from "framer-motion";
import { Brain, Heart, RefreshCw, Scale, Cookie, Frown } from "lucide-react";

const problems = [
    {
        icon: Cookie,
        title: "Compulsão Alimentar",
        description: "Você come mesmo sem fome, especialmente quando está estressada, ansiosa ou triste?",
    },
    {
        icon: RefreshCw,
        title: "Efeito Sanfona",
        description: "Já perdeu peso várias vezes, mas sempre recupera tudo — às vezes até mais?",
    },
    {
        icon: Frown,
        title: "Culpa ao Comer",
        description: "Sente que a comida é sua inimiga e vive em guerra constante com o espelho?",
    },
    {
        icon: Scale,
        title: "Falta de Constância",
        description: "Começa dietas animada, mas em poucos dias já desistiu e se sente fracassada?",
    },
    {
        icon: Heart,
        title: "Comer Emocional",
        description: "Usa a comida para preencher vazios, aliviar dores ou buscar conforto?",
    },
    {
        icon: Brain,
        title: "Autossabotagem",
        description: "Parece que sua própria mente conspira contra você no momento de emagrecer?",
    },
];

const ProblemSection = () => {
    return (
        <section className="bg-gradient-warm py-12 md:py-20 px-4 md:px-6">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                >
                    <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                        O verdadeiro problema
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Por que as dietas falham<br />
                        <span className="text-primary italic">e você não tem culpa</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
                        Se você já tentou dezenas de dietas e nada funcionou de verdade,
                        a culpa não é sua. O problema não está na sua força de vontade —
                        está na sua mente.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                                <problem.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                            </div>
                            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 md:mt-16 bg-card rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-medium border border-border/50"
                >
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                                A raiz do problema está nas{" "}
                                <span className="text-primary">suas emoções</span>
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                Pesquisas em psicologia comportamental mostram que mais de 80% dos casos de
                                dificuldade em manter o peso têm origem emocional. Enquanto você só trata
                                o sintoma (a comida), nunca vai resolver a causa.
                            </p>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">A boa notícia?</strong> Existe um método que
                                trata diretamente essa raiz — e ele funciona.
                            </p>
                        </div>
                        <div className="relative order-first md:order-last">
                            <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-highlight/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                                <div className="text-center p-4 md:p-8">
                                    <Brain className="w-14 h-14 md:w-20 md:h-20 text-primary mx-auto mb-3 md:mb-4 animate-float" />
                                    <p className="font-display text-lg md:text-2xl font-semibold text-foreground">
                                        Mente reprogramada = Corpo transformado
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
