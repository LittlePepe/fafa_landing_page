import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isFor = [
    "Já tentou várias dietas e sempre volta ao ponto de partida e agora quer algo que finalmente funcione de forma leve.",
    "Come por ansiedade, estresse ou tristeza e deseja aprender a controlar a mente sem sentir culpa depois.",
    "Está cansada do efeito sanfona e quer um caminho seguro para emagrecer sem recomeçar mil vezes.",
    "Vive se cobrando e se sentindo culpada com a comida e quer paz, consciência e liberdade.",
    "Quer emagrecer com saúde, leveza e resultados reais sem sofrimento, sem extremismos e sem remédios.",
    "Sente que já é hora de uma transformação profunda: corpo mais leve, mente organizada e emoções em equilíbrio.",
];

const isNotFor = [
    "Quem busca soluções milagrosas e resultados da noite para o dia",
    "Quem não está disposta a olhar para suas emoções",
    "Quem quer apenas mais uma dieta restritiva",
];

const ForWhoSection = () => {
    return (
        <section className="bg-background py-12 md:py-20 px-4 md:px-6">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
                >
                    <span className="inline-block text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                        Para quem é
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Este programa é{" "}
                        <span className="text-primary italic">para você</span>?
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {/* Is For */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-accent/5 border border-accent/20 rounded-2xl md:rounded-3xl p-5 md:p-8"
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                            </div>
                            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                                É para você se...
                            </h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {isFor.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-2 md:gap-3"
                                >
                                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm md:text-base text-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Is Not For */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-muted/50 border border-border rounded-2xl md:rounded-3xl p-5 md:p-8"
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                                <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                            </div>
                            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                                Não é para você se...
                            </h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {isNotFor.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-2 md:gap-3"
                                >
                                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
                            <p className="text-xs md:text-sm text-muted-foreground italic">
                                Transformação verdadeira requer compromisso consigo mesma.
                                Estou aqui para guiar, mas você precisa estar pronta para a jornada.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ForWhoSection;
