import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container-wide px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <Heart className="w-6 h-6 text-primary" />
                        <span className="font-display text-xl font-semibold text-foreground">
                            Fafá Soares
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#metodo" className="text-muted-foreground hover:text-foreground transition-colors">
                            O Método
                        </a>
                        <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                            Sobre
                        </a>
                        <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
                            Depoimentos
                        </a>
                        <Button variant="hero" size="default">
                            Quero emagrecer
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background shadow-medium border-t border-border"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            <a
                                href="#metodo"
                                className="text-foreground py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                O Método
                            </a>
                            <a
                                href="#sobre"
                                className="text-foreground py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sobre
                            </a>
                            <a
                                href="#depoimentos"
                                className="text-foreground py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Depoimentos
                            </a>
                            <Button variant="hero" size="lg" className="mt-2">
                                Quero emagrecer
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
