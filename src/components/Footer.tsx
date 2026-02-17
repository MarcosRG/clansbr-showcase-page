const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-sm tracking-wider">
          <span className="text-primary">CLANS</span>
          <span className="text-foreground">BR</span>
          <span className="text-muted-foreground ml-2">Brusque</span>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} ClansBR. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
