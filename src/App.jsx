import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-36 mt-10">
        <h1 className="text-4xl font-extrabold text-blue-600">
          Ini adalah website portofolio Adha Mastito
        </h1>
        {""}
        <p className="mt-10 text-white font-semibold">
          Ini adalah Button React
        </p>
        <button
          className=" border-sky-400 bg-white w-20 h-10 border-2 rounded hover:bg-white/90 active:bg-sky-400 transition-all"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
