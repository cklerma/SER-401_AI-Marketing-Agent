"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function handleSearch() {
    setSearchResult(input);
  }

  return (
    <main>
      <h1>Instagram Reel Analyzer</h1>

      <p>
        Enter a hashtag to discover and analyze an Instagram Reel.
      </p>

      <div>
        <input
          type="text"
          placeholder="Enter a hashtag..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResult && (
        <p>You searched for: {searchResult}</p>
      )}
    </main>
  );
}