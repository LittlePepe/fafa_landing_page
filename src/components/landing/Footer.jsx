import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-foreground text-background py-10 md:py-12 px-4 md:px-6">
            <div className="container-wide">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                            <span className="font-display text-lg md:text-xl font-semibold">
                                Fafá Soares
                            </span>
                        </div>
                        <p className="text-background/70 text-xs md:text-sm leading-relaxed">
                            Psicanalista clínica especialista em emagrecimento.
                            Transformando vidas através da reprogramação mental.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-semibold text-base md:text-lg mb-3 md:mb-4">Contato</h4>
                        <div className="space-y-2 md:space-y-3">
                            <a
                                href="https://wa.me/5511944652969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                            >
                                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                                WhatsApp: +55 11 94465-2969
                            </a>
                            <a
                                href="mailto:contatofafasoares@gmail.com"
                                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                            >
                                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                                contatofafasoares@gmail.com
                            </a>
                            <a
                                href="https://instagram.com/fafasoaresoficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                            >
                                <Instagram className="w-3 h-3 md:w-4 md:h-4" />
                                @fafasoaresoficial
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-display font-semibold text-base md:text-lg mb-3 md:mb-4">Legal</h4>
                        <div className="space-y-2 md:space-y-3">
                            <p className="text-background/70 text-xs md:text-sm">Psicanalista Clínica</p>
                            <a
                                href="#"
                                className="block text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href="#"
                                className="block text-background/70 hover:text-background transition-colors text-xs md:text-sm"
                            >
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-background/10 pt-6 md:pt-8">
                    <p className="text-center text-background/50 text-xs md:text-sm">
                        © {new Date().getFullYear()} Fafa Soares. Todos os direitos reservados.
                    </p>
                    <p className="text-center text-background/40 text-[10px] md:text-xs mt-1.5 md:mt-2 px-2">
                        Este site não substitui acompanhamento médico ou nutricional.
                        Resultados podem variar de pessoa para pessoa.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
