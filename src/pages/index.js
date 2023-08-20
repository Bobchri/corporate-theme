import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/Banner";
import CardStack from "@/components/Cards/CardStack";
import Features from "@/components/Features";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CardStack />
      <Features />
    </DefaultLayout>
  );
};

export default Home;
