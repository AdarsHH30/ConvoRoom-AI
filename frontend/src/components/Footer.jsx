import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconTerminal2,
} from "@tabler/icons-react";

export function Footer() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AdarsHH30/ConvoRoom-AI.git",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/adarsh30/",
    },
    {
      title: "Portfolio",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.adarshhegde.tech/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Adarsh13673751",
    },
  ];
  return (
    <div className="hidden sm:flex items-center justify-center h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-10 sm:translate-y-15 md:translate-y-20"
        items={links}
      />
    </div>
  );
}
