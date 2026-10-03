"use client";

import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState<File | null>(null);

  function handleVideoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setVideo(file);
      console.log("Uploaded video:", file);
    }
  }

  return (
    <main>
      <h1>Video Analyzer</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
      />

      {video && (
        <div>
          <h2>Selected Video</h2>

          <p>{video.name}</p>

          <video
            src={URL.createObjectURL(video)}
            controls
            width="500"
          />
        </div>
      )}
    </main>
  );
}