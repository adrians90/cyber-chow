import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000000] shadow-lg py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/">
          <span className="text-3xl text-[#FFFF00] font-bold tracking-tight animate-pulse transition-all">
            Cyber Chow
          </span>
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="text-zinc-50/90">Privacy Policy</span>
          <span className="text-zinc-50/90">Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
