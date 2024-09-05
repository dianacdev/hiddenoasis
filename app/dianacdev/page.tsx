import Image from "next/image";

import { Github, LinkedinIcon, Mail, Phone } from "lucide-react";
import Redirect from "@/components/Redirect";
import VCard from "@/components/VCard";

export default function Page() {
  return (
    <div className="mt-40 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Diana Cervantes</h1>
      <h2 className="text-lg font-semibold text-neutral-700 truncate">
        Software Engineer & Founder{" "}
      </h2>
      <div
        className="
          flex 
          justify-center 
          shadow-lg
          w-2/3
          items-center
          flex-col
          bg-neutral-100/50
          dark:bg-slate-950/10
           mt-6 p-6 rounded-md border border-black
        "
      >
        <Redirect
          icon={<Github />}
          title="Checkout my latest projects!"
          link="https://github.com/dianacdev"
        />
        <Redirect
          icon={<LinkedinIcon />}
          title="Connect with me on LinkedIn!"
          link="https://www.linkedin.com/in/dianaac"
        />
        <Redirect
          icon={<Mail />}
          title="Shoot me an email!"
          link="mailto:dianacervantes.021@gmail.com"
        />
        <Redirect
          icon={<Phone />}
          title="Let's chat!"
          link="tel:+1-801-494-4588"
        />
        <VCard link="/diana_cervantes.vcf" download="diana_cervantes.vcf" />
      </div>
    </div>
  );
}
