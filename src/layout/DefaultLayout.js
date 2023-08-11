import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import CircularProgressBar from "@/components/CircularProgressBar";

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

      <footer>{/* Footer will go here */}</footer>
    </div>
  );
};

export default DefaultLayout;
