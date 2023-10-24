import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/Banner";
import CardStack from "@/components/Cards/CardStack";
import Features from "@/components/Features";
import Recruitment from "@/components/Recruitment";
import Feedbacks from "@/components/Feedbacks";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CardStack />
      <Features />
      <Recruitment/>
      <Feedbacks/>
    </DefaultLayout>
  );
};

export default Home;
