import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Onde <span className="text-accent text-glow-blue">Estamos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visite-nos no coração de Brusque
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9!2d-48.9176!3d-27.0972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e7d5d0f2e07%3A0x0!2sAv.%20C%C3%B4nsul%20Carlos%20Renaux%2C%20182%2C%20Brusque%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ClansBR Brusque"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-wider uppercase mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Av. Cônsul Carlos Renaux, 182 - Sala 02<br />
                  Centro 1, Brusque - SC<br />
                  CEP: 88350-002
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-wider uppercase mb-1">Telefone</h3>
                <a href="tel:+554730490552" className="text-muted-foreground hover:text-primary transition-colors">
                  (47) 3049-0552
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
              <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-wider uppercase mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Seg a Sáb: 10h às 22h<br />
                  Domingos e Feriados: 14h às 22h
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/clansbrbq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl border border-border bg-card group hover:border-primary/50 transition-all"
            >
              <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-wider uppercase mb-1">Instagram</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  @clansbrbq
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
