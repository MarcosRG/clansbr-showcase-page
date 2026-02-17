import { motion } from "framer-motion";
import { Instagram, MapPin, Phone } from "lucide-react";
import bannerImage from "@/assets/clansbr-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Banner Image as full background */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="ClansBR - Desde 2002"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom fadeout to background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Content overlay at bottom */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-auto pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-10 font-body"
        >
          A melhor experiência gaming de Brusque. PCs de última geração, PlayStation 5 e Simulador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.instagram.com/clansbrbq/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider uppercase transition-all hover:scale-105 glow-border-red"
          >
            <Instagram className="w-5 h-5" />
            Siga no Instagram
          </a>
          <a
            href="tel:+554730490552"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-heading text-sm font-semibold tracking-wider uppercase transition-all hover:bg-secondary hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Ligue Agora
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>Av. Cônsul Carlos Renaux, 182 - Centro, Brusque - SC</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
