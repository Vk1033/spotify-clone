"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const handleOnClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    //music player
  };
  return (
    <div onClick={handleOnClick} className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md">
      <div className="relative min-h-[48px] min-w-[48px] rounded-md overflow-hidden">
        <Image fill src={imageUrl || "/image/liked.png"} alt="Media Item" />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
