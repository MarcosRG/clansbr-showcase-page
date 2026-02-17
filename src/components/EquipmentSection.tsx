import { motion } from "framer-motion";
import { Monitor, Gamepad2, Wifi } from "lucide-react";
import gamingPcImage from "@/assets/gaming-pc.jpg";
import consolesImage from "@/assets/consoles.jpg";

const equipments = [
  {
    icon: Monitor,
    title: "PCs Gamers",
    description: "Computadores de última geração com placas de vídeo RTX, monitores 144Hz e periféricos premium para a melhor performance nos seus jogos favoritos.",
    image: gamingPcImage,
    imageAlt: "Computador gamer de alta performance com iluminação RGB",
  },
  {
    icon: Gamepad2,
    title: "PS5 & Xbox Series X",
    description: "Os melhores consoles da geração atual com os últimos lançamentos. Jogue com os amigos nos melhores títulos exclusivos.",
    image: consolesImage,
    imageAlt: "PlayStation 5 e Xbox Series X com controles",
  },
  {
    icon: Wifi,
    title: "Internet Ultra Rápida",
    description: "Conexão de fibra óptica de altíssima velocidade para garantir zero lag e a melhor experiência online possível.",
    image: null,
    imageAlt: "",
  },
];

const EquipmentSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary text-glow-red">Equipamentos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tudo que você precisa para uma experiência gaming inesquecível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {equipments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {item.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
              )}
              {!item.image && (
                <div className="h-48 gradient-red-blue opacity-20" />
              )}
              <div className="p-6 relative">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
