import React from "react";

interface VCardProps {
  link: string;
  download: string;
}

function VCard({ link, download }: VCardProps) {
  return (
    <a
      href={link}
      download={download}
      className="
        inline-flex
        justify-center 
        whitespace-nowrap 
        rounded-lg 
        px-3.5 
        py-2.5 
        text-sm 
        font-medium 
        text-slate-200 
        dark:text-slate-800 
        bg-gradient-to-r 
        from-slate-800 
        to-slate-700 
        dark:from-slate-200 
        dark:to-slate-100 
        dark:hover:bg-slate-100 
        shadow 
        focus:outline-none 
        focus:ring 
        focus:ring-slate-500/50 
        focus-visible:outline-none 
        focus-visible:ring 
        focus-visible:ring-slate-500/50 
        relative 
        before:absolute 
        before:inset-0 
        before:rounded-[inherit] 
        before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] 
        dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] 
        before:bg-[length:250%_250%,100%_100%]
        before:bg-[position:200%_0,0_0] 
        before:bg-no-repeat 
        before:[transition:background-position_0s_ease] 
        hover:before:bg-[position:-100%_0,0_0] 
        hover:before:duration-[1500ms]
       "
    >
      Add Contact Info
    </a>
  );
}

export default VCard;
