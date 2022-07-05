import { Routes, Route, Link } from "react-router-dom";
import {HomePage} from "./pages/HomePage"
import { LoginSignup } from "./pages/LoginSignup";
import { LogoDesign } from "./pages/LogoDesign";
import { GigDetails } from "./pages/GigDetails";
import { Navigation } from "./components/Navigation";
import { useSelector } from "react-redux";
import { BecomeASeller } from "./pages/BecomeASeller";
import { MyProfile } from "./pages/MyProfile";

export function RootCmp(props) {

  const { user } = useSelector(state => state.userModule)

  

  return (
    <section className="app main-container">
      <header className="full">
        <Navigation user={user}/>
      </header>
      <main className="full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<GigDetails />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Login" element={<LoginSignup />} />
        <Route path="/Become-a-seller" element={<BecomeASeller />} />
        <Route path="/logo-design" element={<LogoDesign />} />
      </Routes>
      </main>
      
    </section>
  );
}

