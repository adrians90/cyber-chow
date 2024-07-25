import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-6 bg-[#000000] shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-[#FFFF00]"
        >
          Cyber Chow
        </Link>
      </div>
    </div>
  );
};

export default Header;
