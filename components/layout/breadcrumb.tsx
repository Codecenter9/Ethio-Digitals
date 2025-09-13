"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BubbleBackground } from "./background";
import { useEffect } from "react";
import AOS from "aos";

interface SharedHeroProps {
  title?: string;
  description?: string;
}

export function SharedHero({ title, description }: SharedHeroProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  const displayTitle =
    title || (parts.length > 0 ? parts[parts.length - 1] : "");

  return (
    <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center overflow-hidden bg-gray-900">
      <BubbleBackground />

      <div className="relative z-10 container mx-auto px-6 md:px-8 h-full flex flex-col justify-start pt-28">
        <div className="mb-6 flex justify-end h-full items-center">
          <Breadcrumb>
            <BreadcrumbList className="flex flex-wrap items-center space-x-2 text-white text-sm md:text-base">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="hover:underline transition-all">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {parts.map((part, idx) => {
                const href = "/" + parts.slice(0, idx + 1).join("/");
                const isLast = idx === parts.length - 1;
                return (
                  <div key={idx} className="flex items-center space-x-2">
                    <BreadcrumbSeparator>
                      <SlashIcon className="w-4 h-4 text-white" />
                    </BreadcrumbSeparator>

                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="capitalize font-semibold">
                          {part}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={href}
                            className="capitalize hover:underline transition-all"
                          >
                            {part}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col justify-end max-w-5xl h-full pb-12">
          <div className="relative">
            <div className="absolute -left-6 top-3 w-4 h-4 bg-indigo-500 rounded-full opacity-80 glow-effect"></div>
            <div className="absolute -left-2 -top-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 glow-effect" style={{ animationDelay: '1s' }}></div>

            <h1
              data-aos="fade-down"
              data-aos-delay={300}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white capitalize mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-2xl text-shadow">
                {displayTitle}
              </span>

              <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-sm -z-10">
                {displayTitle}
              </span>
            </h1>

            <div data-aos="fade-right" data-aos-delay={350} className="h-0.5 w-20 bg-gradient-to-r from-indigo-400 to-purple-400 mb-6 rounded-full"></div>
          </div>

          {description && (
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              className="relative pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-400/50 to-purple-400/50"></div>

              <p className="text-xl md:text-2xl text-gray-100 opacity-90 max-w-2xl leading-relaxed font-light text-shadow">
                {description}
              </p>

              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl -z-10 blur-md"></div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
