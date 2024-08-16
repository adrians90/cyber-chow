import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="font-bold text-[#FFFF00]/80 hover:text-[#FFFF00]"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          variant="ghost"
          className="font-bold bg-[#FFFF00] hover:bg-[#FFFF00]/60 text-black"
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
