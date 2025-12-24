import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

const BASE = import.meta.env.BASE_URL;

const playlist: Song[] = [
  {
    title: 'All I Want For Christmas Is You',
    artist: 'Mariah Carey',
    src: `${BASE}music/All_I_Want_For_Christmas_Is_You.mp3`,
    cover: `${BASE}photos/image12.jpg`,
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    src: `${BASE}music/Perfect.mp3`,
    cover: `${BASE}photos/image2.jpg`,
  },
  {
    title: 'I Think They Call This Love',
    artist: 'Elliot James Reay',
    src: `${BASE}music/I_Think_They_Call_This_Love.mp3`,
    cover: `${BASE}photos/image3.jpg`,
  },
  {
    title: 'Everytime',
    artist: 'Chen (EXO) & Punch',
    src: `${BASE}music/Everytime.mp3`,
    cover: `${BASE}photos/image4.jpg`,
  },
  {
    title: 'Say Yes',
    artist: 'Loco & Punch',
    src: `${BASE}music/Say_Yes.mp3`,
    cover: `${BASE}photos/image5.jpg`,
  },
  {
    title: 'This Love',
    artist: 'DAVICHI',
    src: `${BASE}music/This_Love.mp3`,
    cover: `${BASE}photos/image6.jpg`,
  },
  {
    title: 'Gặp em đúng lúc',
    artist: 'Luân Tang',
    src: `${BASE}music/Gap_Em_Dung_Luc.mp3`,
    cover: `${BASE}photos/image7.jpg`,
  },
  {
    title: 'Tong Hua',
    artist: 'Michael Wong',
    src: `${BASE}music/Tong_Hua.mp3`,
    cover: `${BASE}photos/image8.jpg`,
  },
  {
    title: 'See Tình',
    artist: 'Hoàng Thùy Linh',
    src: `${BASE}music/See_Tinh.mp3`,
    cover: `${BASE}photos/image9.jpg`,
  },
  {
    title: 'To The Moon',
    artist: 'hooligan',
    src: `${BASE}music/TO_THE_MOON.mp3`,
    cover: `${BASE}photos/image11.jpg`,
  },
  {
    title: 'CƯỚI ĐI',
    artist: 'Changg x 2T',
    src: `${BASE}music/CUOI_DI.mp3`,
    cover: `${BASE}photos/image10.jpg`,
  },
  {
    title: 'Một Nhà',
    artist: 'Da LAB',
    src: `${BASE}music/Mot_Nha.mp3`,
    cover: `${BASE}photos/image1.jpg`,
  },
];

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const song = playlist[index];

  // Auto-play on mount
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Browser blocked autoplay, user needs to click play
          console.log('Autoplay blocked, user interaction required');
        }
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => setIsPlaying(false));

    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const { currentTime, duration } = audioRef.current;
    setProgress(duration ? (currentTime / duration) * 100 : 0);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [index]);

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-auto">
      <div className="flex items-center gap-3 bg-silver/80 backdrop-blur-md 
                      border border-white/20 rounded-full 
                      px-3 py-2 shadow-lg">

        {/* Cover */}
        <img
          src={song.cover}
          alt="cover"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />

        {/* Info + progress (ẨN TRÊN MOBILE) */}
        <div className="hidden sm:flex flex-col min-w-[180px]">
          <span className="text-white text-sm font-semibold truncate">
            {song.title}
          </span>
          <span className="text-white/60 text-xs truncate">
            {song.artist}
          </span>

          <div className="w-full h-[2px] bg-white/20 mt-1">
            <div
              className="h-full bg-white transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controls desktop */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={prevSong}
            className="text-white/70 hover:text-white transition"
          >
            <SkipBack size={18} />
          </button>

          <button
            onClick={togglePlay}
            className="text-white/70 hover:text-white transition"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button
            onClick={nextSong}
            className="text-white/70 hover:text-white transition"
          >
            <SkipForward size={18} />
          </button>
        </div>

        {/* Play/Pause MOBILE ONLY */}
        <button
          onClick={togglePlay}
          className="flex sm:hidden text-white/70"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Audio */}
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={nextSong}
          preload="auto"
        >
          <source src={song.src} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};
export default MusicPlayer;