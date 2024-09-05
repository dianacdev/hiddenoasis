import React from "react";

interface RedirectProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

function Redirect({ icon, title, link }: RedirectProps) {
  return (
    <a
      className="w-full sm:w-1/2 bg-slate-50 p-3 rounded-md m-2 border border-black shadow-md"
      href={link}
    >
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center mr-5 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            {icon}
          </span>
          <span className="text-sm sm:text-sm md:text-base lg:text-lg">
            {title}
          </span>
        </div>
      </div>
    </a>
  );
}

export default Redirect;
