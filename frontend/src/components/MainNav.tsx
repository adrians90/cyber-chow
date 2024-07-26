import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={async () => await loginWithRedirect()}
      variant="ghost"
      className="font-bold bg-[#FFFF00] hover:bg-[#FFFF00]/60 text-black"
    >
      Log In
    </Button>
  );
};

export default MainNav;
