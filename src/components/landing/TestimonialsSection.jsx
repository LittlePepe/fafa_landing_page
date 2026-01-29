import { motion } from "framer-motion";
import DomeGallery from './DomeGallery';

const testimonials = [
  {
    src: '/images/depoimentos/1.jpeg',
    alt: 'Mariana S., 38 anos',
    caption: 'Mariana S., 38 anos - Perdi 18kg e finalmente entendi que o problema nunca foi a dieta'
  },
  {
    src: '/images/depoimentos/2.jpeg',
    alt: 'Patrícia L., 45 anos',
    caption: 'Patrícia L., 45 anos - Aprendi a identificar meus gatilhos e hoje tenho uma relação livre com a comida (-12kg)'
  },
  {
    src: '/images/depoimentos/3.jpeg',
    alt: 'Fernanda C., 32 anos',
    caption: 'Fernanda C., 32 anos - O efeito sanfona era meu pesadelo. Já faz 2 anos que mantenho meu peso ideal (-15kg)'
  },
  {
    src: '/images/depoimentos/4.jpeg',
    alt: 'Juliana M., 41 anos',
    caption: 'Juliana M., 41 anos - Emagreci sem fazer dieta. Quando você trata a mente, o corpo segue (-22kg)'
  },
  {
    src: '/images/depoimentos/5.jpeg',
    alt: 'Carla R., 35 anos',
    caption: 'Carla R., 35 anos - Chorei na primeira sessão quando entendi de onde vinha minha compulsão (-10kg)'
  },
  {
    src: '/images/depoimentos/6.jpeg',
    alt: 'Amanda B., 29 anos',
    caption: 'Amanda B., 29 anos - Passei a vida lutando contra meu corpo. Hoje somos parceiros (-14kg)'
  },
  {
    src: '/images/depoimentos/7.jpeg',
    alt: 'Beatriz S., 36 anos',
    caption: 'Beatriz S., 36 anos - A transformação começou na mente e refletiu no corpo (-16kg)'
  },
  {
    src: '/images/depoimentos/8.jpeg',
    alt: 'Camila F., 33 anos',
    caption: 'Camila F., 33 anos - Aprendi a me amar e o peso foi consequência (-13kg)'
  },
  {
    src: '/images/depoimentos/9.jpeg',
    alt: 'Daniela M., 40 anos',
    caption: 'Daniela M., 40 anos - Finalmente encontrei paz com meu corpo e com a comida (-19kg)'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-12 md:py-20 overflow-hidden">
      <div className="container-wide px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block text-highlight font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Resultados reais
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Histórias de{" "}
            <span className="text-primary italic">transformação</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            Mulheres que decidiram tratar a causa real do peso e hoje vivem livres
          </p>
        </motion.div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]" style={{ height: '80vh' }}>
        <DomeGallery
          images={testimonials}
          fit={1.2}
          minRadius={900}
          maxRadius={1400}
          fitBasis="width"
          overlayBlurColor="#f9f7f5"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
