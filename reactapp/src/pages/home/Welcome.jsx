import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header1 from "../../components/header/Header1";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

import "./home.css";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Header1 />
      <div className="homeContainer">
        <h1 className="homeTitle">Explore India</h1>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties /> 
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
