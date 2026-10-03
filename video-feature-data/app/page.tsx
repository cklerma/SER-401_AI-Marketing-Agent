"use client";

import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState<File | null>(null);
  const [frames, setFrames] = useState<string[]>([]);

  function handleVideoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setVideo(file);
      setFrames([]);
    }
  }

  function captureFrame(
    videoElement: HTMLVideoElement,
    time: number
  ): Promise<string> {
    return new Promise((resolve) => {
      videoElement.currentTime = time;

      videoElement.onseeked = () => {
        const canvas = document.createElement("canvas");

        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        const context = canvas.getContext("2d");

        if (!context) {
          resolve("");
          return;
        }

        context.drawImage(
          videoElement,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const image = canvas.toDataURL("image/jpeg", 0.8);

        resolve(image);
      };
    });
  }

  async function extractFrames() {
    if (!video) return;

    const videoElement = document.createElement("video");

    videoElement.src = URL.createObjectURL(video);
    videoElement.muted = true;

    videoElement.onloadedmetadata = async () => {
      const duration = videoElement.duration;

      const frameTimes = [
        duration * 0.1,
        duration * 0.3,
        duration * 0.5,
        duration * 0.7,
        duration * 0.9,
      ];

      const extractedFrames: string[] = [];

      for (const time of frameTimes) {
        const frame = await captureFrame(videoElement, time);

        if (frame) {
          extractedFrames.push(frame);
        }
      }

      setFrames(extractedFrames);
    };
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

          <br />

          <button onClick={extractFrames}>
            Analyze Video
          </button>
        </div>
      )}

      {frames.length > 0 && (
        <div>
          <h2>Extracted Frames</h2>

          {frames.map((frame, index) => (
            <div key={index}>
              <p>Frame {index + 1}</p>

              <img
                src={frame}
                alt={`Frame ${index + 1}`}
                width="300"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}