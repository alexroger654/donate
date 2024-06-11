import Categories from "@/components/Home/Categories";
import Categories2 from "@/components/Home/Categories2";
import HelpCards from "@/components/Home/HelpCards";
import HelpNow from "@/components/Home/HelpNow";
import Hero from "@/components/Home/Hero";
import Status from "@/components/Home/Status";
import Testtimonian from "@/components/Home/Testtimonian";
import TopDonorCompany from "@/components/Home/TopDonorCompany";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <HelpNow />
      <Categories />
      <Categories2 />
      <HelpCards />
      <Status />
      <TopDonorCompany />
      <Testtimonian />
    </>
  );
}
