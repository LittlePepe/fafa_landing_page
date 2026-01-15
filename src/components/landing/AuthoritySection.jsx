import { motion } from "framer-motion";
import { Award, BookOpen, Users, Heart } from "lucide-react";
import fafaSoares from "@/assets/fafa-soares.png";

const credentials = [
    {
        icon: BookOpen,
        title: "Psicanalista Clínica",
        description: "Terapeuta integrativa e treinadora cognitiva de alta performance",
    },
    {
        icon: Award,
        title: "Master Coach de Emagrecimento",
        description: "Especialista em saúde, bem-estar e mudança de hábitos",
    },
    {
        icon: Users,
        title: "Criadora do MDM",
        description: "Método Definitivamente Magra - transformando vidas",
    },
    {
        icon: Heart,
        title: "Mulheres Curadas para Curar",
        description: "Idealizadora do movimento de transformação feminina",
    },
];

const AuthoritySection = () => {
    return (
        <section className="bg-card py-12 md:py-20 px-4 md:px-6">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative max-w-md mx-auto lg:max-w-none"
                    >
                        <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl md:rounded-3xl blur-xl" />
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-medium">
                            <img
                                src={fafaSoares}
                                alt="Fafá Soares - Psicanalista clínica especialista em emagrecimento"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                            Quem vai te guiar
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                            Olá, eu sou a{" "}
                            <span className="text-primary">Fafá Soares Pardal</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                            <p>
                                Eu sei exatamente o que você está passando. Eu já passei por isso, sofri 10 anos
                                com ansiedade, síndrome do pânico seguido de pensamentos de morte. Nessa época
                                eu estava com 11kg acima do meu peso.
                            </p>
                            <p>
                                Busquei emagrecer de todas as formas. Sempre perdia 2, 3kg e logo recuperava…
                                Era uma briga vibrante com a balança, sentimento de culpa, medo e nenhuma dieta
                                adiantava.
                            </p>
                            <p>
                                Quando tomei a decisão de cuidar da minha mente, me livrei da ansiedade e emagrecer
                                se tornou algo simples e leve. Por essa razão busquei estudar e me capacitar para
                                libertar outras mulheres.
                            </p>
                            <p className="font-medium text-foreground">
                                Minha missão: Curar mentes para libertar corpos e transformar gerações.
                                Não negocie com a sua mente.
                            </p>
                        </div>

                        {/* Credentials grid */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {credentials.map((credential, index) => (
                                <motion.div
                                    key={credential.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-3 p-3 md:p-4 bg-background rounded-lg md:rounded-xl border border-border/50 text-center sm:text-left"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <credential.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-xs md:text-sm mb-0.5 md:mb-1">
                                            {credential.title}
                                        </h4>
                                        <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                                            {credential.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AuthoritySection;
