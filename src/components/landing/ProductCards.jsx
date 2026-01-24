import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, ArrowRight } from "lucide-react";

const products = [
    {
        title: "Emagreça até 6kg em 21 dias",
        description: "Um guia prático e direto para você eliminar peso de forma saudável em apenas 3 semanas. Transforme seu corpo com um método comprovado.",
        link: "https://fatima8.orbitpages.online/emagreca-ate-6-kg-em-21-dias",
        icon: BookOpen,
        color: "text-primary",
        bg: "bg-primary/10",
        highlight: "21 Dias",
    },
    {
        title: "Desafios 30 dias Magra & Plena",
        description: "Participe de um desafio exclusivo de 30 dias para reprogramar sua mente e conquistar o corpo que você deseja, com plenitude e saúde.",
        link: "https://pay.hotmart.com/N49716669B?off=p131n4hk",
        icon: Star,
        color: "text-accent",
        bg: "bg-accent/10",
        highlight: "30 Dias",
    },
];

const ProductCards = () => {
    return (
        <section className="py-20 md:py-32 px-4 md:px-6 bg-background relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container-narrow relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                        Nossos Materiais
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Acelere seus <span className="text-primary italic font-light">Resultados</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Confira nossos materiais exclusivos desenvolvidos para te apoiar nessa jornada de transformação.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-medium flex flex-col"
                        >
                            <div className="absolute top-6 right-6">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${product.bg} ${product.color}`}>
                                    {product.highlight}
                                </span>
                            </div>

                            <div className={`w-14 h-14 rounded-2xl ${product.bg} ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <product.icon className="w-7 h-7" />
                            </div>

                            <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                {product.description}
                            </p>

                            <Button
                                asChild
                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                variant="outline"
                            >
                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                    Quero saber mais
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;
