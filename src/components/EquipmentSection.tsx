import { motion } from "framer-motion";
import { Monitor, Gamepad2, Wifi, Users, Moon } from "lucide-react";
import gamingPcImage from "@/assets/gaming-pc.jpg";
import ps5SimuladorImage from "@/assets/ps5-simulador.png";
import internetImage from "@/assets/internet-speed.jpg";
import ambiente5x5Image from "@/assets/ambiente-5x5.png";
import corujaoImage from "@/assets/corujao.jpg";

const equipments = [
  {
    icon: Monitor,
    title: "PCs Gamers",
    description: "Computadores de última geração com placas de vídeo RTX, Monitores Alienware 360 Hz e periféricos premium para a melhor performance nos seus jogos favoritos.",
    image: gamingPcImage,
    imageAlt: "Computador gamer de alta performance com iluminação RGB",
    link: null,
  },
  {
    icon: Gamepad2,
    title: "PS5 e Simulador",
    description: "PlayStation 5 e simuladores com os últimos lançamentos. Jogue com os amigos nos melhores títulos exclusivos.",
    image: ps5SimuladorImage,
    imageAlt: "PlayStation 5 e simulador na ClansBR",
    link: null,
  },
  {
    icon: Wifi,
    title: "Internet Ultra Rápida + Servidores Privados",
    description: "Conexão de fibra óptica de altíssima velocidade com servidores privados dedicados para garantir zero lag e a melhor experiência online possível.",
    image: internetImage,
    imageAlt: "Internet ultra rápida com fibra óptica",
    link: null,
  },
  {
    icon: Users,
    title: "Ambiente 5x5 para Campeonatos",
    description: "O ambiente preparado para 5x5, face to face ideal para campeonatos competitivos com servidor privado e estrutura para lives.",
    image: ambiente5x5Image,
    imageAlt: "Ambiente 5x5 para campeonatos na ClansBR",
    link: "https://www.youtube.com/watch?v=IsS6xrH8d8o&t=11491s",
  },
  {
    icon: Moon,
    title: "Corujões",
    description: "Toda sexta e sábado das 22h até 5h! Venha curtir a madrugada jogando com os amigos. Promoções especiais, muita diversão e aquela energia gamer que só a noite traz.",
    image: corujaoImage,
    imageAlt: "Corujão gaming na ClansBR",
    link: null,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((item, index) => {
            const CardWrapper = item.link ? 'a' : 'div';
            const linkProps = item.link
              ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardWrapper
                  {...linkProps}
                  className={`group relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 block h-full ${item.link ? 'cursor-pointer' : ''}`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    {item.link && (
                      <span className="mt-3 inline-block text-primary text-sm font-semibold">
                        Assistir vídeo →
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
