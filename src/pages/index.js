import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/HomePage/Banner";
import CardStack from "@/components/HomePage/CardStack";
import Features from "@/components/HomePage/Features";
import Recruitment from "@/components/HomePage/Recruitment";
import Feedbacks from "@/components/HomePage/Feedbacks";
import PriceStack from "@/components/HomePage/PriceStack";
import Jumbotron from "@/components/HomePage/Jumbotron";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CardStack />
      <Features />
      <Recruitment/>
      <Jumbotron/>
      <PriceStack/>
      <Feedbacks/>
    </DefaultLayout>
  );
};

export default Home;
