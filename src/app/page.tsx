import AboutUs from "@/components/Home/AboutUs";
import Campaigns from "@/components/Home/Campaigns";
import Categories from "@/components/Home/Categories";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import LatestCampaigns from "@/components/Home/LatestCampaigns";
import TopDonorCompany from "@/components/Home/TopDonorCompany";

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
