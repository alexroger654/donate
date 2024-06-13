import AboutUs from "@/components/Home/AboutUs";
import Banner from "@/components/Home/Banner";
import Campaigns from "@/components/Home/Campaigns";
import Categories from "@/components/Home/Categories";
import Categories2 from "@/components/Home/Categories2";
import Features from "@/components/Home/Features";
import HelpCards from "@/components/Home/HelpCards";
import HelpNow from "@/components/Home/HelpNow";
import Hero from "@/components/Home/Hero";
import LatestCampaigns from "@/components/Home/LatestCampaigns";
import Status from "@/components/Home/Status";
import Testtimonian from "@/components/Home/Testtimonian";
import TopDonorCompany from "@/components/Home/TopDonorCompany";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Campaigns />
      <AboutUs />
      <Features />
      <TopDonorCompany />
      <LatestCampaigns />
    </>
  );
}
