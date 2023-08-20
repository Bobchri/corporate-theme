import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/Banner";
import CardStack from "@/components/Cards/CardStack";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <CardStack />
    </DefaultLayout>
  );
};

export default Home;
