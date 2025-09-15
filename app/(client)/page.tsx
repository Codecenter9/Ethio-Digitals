
import Counters from "@/components/cards/counters";
import CTA from "@/components/cards/CTA";
import About from "@/components/sections/about";
import Blogs from "@/components/sections/blogs";
import Features from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import ProductTimeline from "@/components/ui/timeline";

export default function Home() {
  return (
    <div className=" bg-gray-950 text-white">
      <Hero />
      <Counters />
      <About />
      <Features />
      <ProductTimeline />
      {/* <Technologies /> */}
      <Testimonials />
      <Blogs />
      <CTA />
    </div>
  );
}
