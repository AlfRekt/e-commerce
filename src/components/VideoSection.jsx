import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "sVE0IyjJ3aQ?si=ne58A3fo09__kTSK";

function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full px-6 py-12 md:px-[195px] md:py-16">
      <div className="relative mx-auto aspect-video w-full max-w-[660px] overflow-hidden rounded">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group h-full w-full"
            aria-label="Play video"
          >
            {/* Kapak görseli — videonun YouTube thumbnail'ı */}
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />
            {/* Play butonu */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#23A6F0] text-white transition group-hover:scale-110">
                <Play size={28} className="fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoSection;