import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import CircularProgressBar from "@/components/CircularProgressBar";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* Main content */}
      <main>
        {children}
        <ThemeSwitch />
        <CircularProgressBar />
      </main>

      <footer>
        {/* Footer will go here */}
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
