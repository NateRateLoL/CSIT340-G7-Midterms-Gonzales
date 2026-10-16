import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import Repositories from "./component/Repositories";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      
      <Profile />
      <Repositories />

      <Footer />
    </div>
  );
}

export default App;
