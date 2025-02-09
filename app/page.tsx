import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";


import { FaHome, FaProjectDiagram, FaQuoteLeft, FaEnvelope } from "react-icons/fa";
export const navItems = [
    { name: "Home", link: "#home", icon: <FaHome className="text-white" /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram className="text-white" /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope className="text-white" /> },
  ];

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto
   flex-col px-5 sm:px-10
   ">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={
       navItems
      } />
      <Hero />
      <Grid />
      <RecentProjects />
      <Approach />
      <Footer />
    </div>
   </main>
  );
}
