import landingImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-zinc-50 rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight">
          Night City's preem kibble
        </h1>
        <span className="text-xl text-zinc-950/80 font-bold">
          Delivered straight to your megabuilding
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} className="rounded-lg shadow-lg" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span className="text-zinc-950">
            Download the <span className="font-bold italic">Cyber Chow</span>{" "}
            app from the corpo store{" "}
            <span className="font-bold italic">now</span>
          </span>
          <img src={appDownloadImg} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
