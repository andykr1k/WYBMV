import { useState } from "react";
import { ParticlesBG } from "./components";
import { Toaster, toast } from "sonner";

export default function App() {
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleButtonClick = (response) => {
    if (response === "Yes") {
      toast("Yay! You're my Valentine! ❤️");
      playSong("/love.mp3");
    } else {
      toast("Oh WOW! You're my Valetine frfr!!❤️");
      playSong("/let.mp3");
    }
  };

  const playSong = (songPath) => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
    }

    const audio = new Audio(songPath);
    audio.play();
    setCurrentAudio(audio);

    audio.addEventListener("ended", () => {
      setCurrentAudio(null);
    });
  };

  return (
    <div>
      <ParticlesBG />
      <div className="grid z-10 pt-32 lg:pt-44">
        <div className="space-y-10">
          <h1 className="text-red-600 text-2xl lg:text-5xl font-extrabold italic flex justify-center z-20">
            Will You Be My Valentine?
          </h1>
          <div className="flex justify-center items-center">
            <img src="/us.JPG" className="w-48 lg:w-64 rounded-lg" alt="Us" />
          </div>
          <div className="flex justify-center items-center z-20 space-x-3">
            <button
              className="text-red-600 rounded-lg py-3 px-5 border border-red-600"
              onClick={() => handleButtonClick("Yes")}
            >
              Yes
            </button>
            <button
              className="text-red-600 rounded-lg py-3 px-5 border border-red-600"
              onClick={() => handleButtonClick("YES!")}
            >
              YES!
            </button>
          </div>
          {currentAudio && (
            <h3 className="flex justify-center text-red-600">
              Enjoy the song! 🎵
            </h3>
          )}
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
