import landingImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-gradient-to-t from-zinc-50 via-violet-100 to-violet-300 rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight">
          Night City's preem kibble
        </h1>
        <span className="text-xl text-zinc-950/80 font-bold">
          Delivered straight to your megabuilding
        </span>
        <SearchBar placeHolder="Search by City" onSubmit={handleSearchSubmit} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} className="rounded-lg shadow-lg" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Grab your takeaway in a{" "}
            <span className="text-violet-600 animate-ping transition-all italic">
              flash!
            </span>
          </span>
          <span className="text-zinc-950">
            <span className="font-bold">Download</span> the{" "}
            <span className="font-bold italic">Cyber Chow</span> app from the
            corpo store <span className="font-bold italic">now</span>
          </span>
          <img src={appDownloadImg} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
