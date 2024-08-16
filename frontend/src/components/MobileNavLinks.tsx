import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex items-center font-bold text-zinc-950/80 hover:text-zinc-950"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex items-center font-bold text-zinc-950/80 hover:text-zinc-950"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex items-center font-bold text-zinc-950/80 hover:text-zinc-950"
      >
        Digital Identity
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold bg-zinc-950 text-[#FFFF00]"
      >
        Let's Delta
      </Button>
    </>
  );
};

export default MobileNavLinks;
