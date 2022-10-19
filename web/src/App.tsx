import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CreateAdBanner from "./components/CreateAdBanner";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import GameBanner from "./components/GameBanner";

import "./styles/main.css";

import logoImg from "./assets/logo-nwl-esports.svg";
import CreateAdModal from "./components/CreateAdModal";
import axios from "axios";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [validateCss, setValidateCss] = useState(5);

 
  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
      setValidateCss(6)
    })
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: validateCss,
      spacing: 25,
    },
  });

  return (
    // Layout

    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt=""></img>

      <h1 className="text-6xl font-black text-white mt-20">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {" "}
          duo{" "}
        </span>
        está aqui.
      </h1>

      {/* Area dos jogos */}

      <div ref={ref} className={`keen-slider mt-16`}>
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
