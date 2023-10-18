import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/Banner";
import CardStack from "@/components/Cards/CardStack";
import Features from "@/components/Features";
import Recruitment from "@/components/Recruitment";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CardStack />
      <Features />
      <Recruitment/>
    </DefaultLayout>
  );
};

export default Home;
