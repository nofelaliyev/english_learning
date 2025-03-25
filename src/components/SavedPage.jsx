export default function SavedPage() {
  const saved = JSON.parse(localStorage.getItem("liked") || "[]");
  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-2xl mb-4">Saved Sentences</h1>
      {saved.map((s, i) => (
        <div key={i} className="mb-2 border-b pb-2">
          <div>{s.english}</div>
          <div className="text-gray-400">{s.azerbaijani}</div>
        </div>
      ))}
    </div>
  );
}