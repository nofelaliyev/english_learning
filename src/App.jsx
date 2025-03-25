import { useState } from "react";
import { sentences } from "./data/sentences";
import SentenceCard from "./components/SentenceCard";
import SavedPage from "./components/SavedPage";

function App() {
  const [index, setIndex] = useState(0);
  const [viewSaved, setViewSaved] = useState(false);

  const sentence = sentences[index % sentences.length];

  const speak = () => {
    const utter = new SpeechSynthesisUtterance(sentence.english);
    speechSynthesis.speak(utter);
  };

  const like = () => {
    const saved = JSON.parse(localStorage.getItem("liked") || "[]");
    saved.push(sentence);
    localStorage.setItem("liked", JSON.stringify(saved));
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: "Learn English",
        text: `${sentence.english} - ${sentence.azerbaijani}`,
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {viewSaved ? (
        <SavedPage />
      ) : (
        <SentenceCard
          sentence={sentence}
          onLike={like}
          onSpeak={speak}
          onShare={share}
        />
      )}
      <div className="absolute bottom-6 left-0 right-0 flex justify-around">
        <button onClick={() => setIndex((i) => i + 1)} className="bg-white text-black py-2 px-4 rounded">Next</button>
        <button onClick={() => setViewSaved((v) => !v)} className="text-white underline">
          {viewSaved ? "Back" : "Saved"}
        </button>
      </div>
    </div>
  );
}

export default App;