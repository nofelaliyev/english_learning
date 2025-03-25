import { motion } from "framer-motion";

export default function SentenceCard({ sentence, onLike, onSpeak, onShare }) {
  return (
    <motion.div className="h-screen flex flex-col justify-center items-center px-4 text-white bg-black"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="text-3xl font-bold mb-2">{sentence.english}</div>
      <div className="text-lg mb-4">{sentence.azerbaijani}</div>
      <div className="flex gap-4 mt-4">
        <button onClick={onSpeak}>🔊</button>
        <button onClick={onLike}>❤️</button>
        <button onClick={onShare}>📤</button>
      </div>
    </motion.div>
  );
}