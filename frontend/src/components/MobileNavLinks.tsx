import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
  return (
    <>
      <Link
        to="/user-profile"
        className="flex items-center font-bold text-zinc-950/80 hover:text-zinc-950"
      >
        Digital Identity
      </Link>
      <Button className="flex items-center px-3 font-bold bg-zinc-950 text-[#FFFF00]">
        Let's Delta
      </Button>
    </>
  );
};

export default MobileNavLinks;
