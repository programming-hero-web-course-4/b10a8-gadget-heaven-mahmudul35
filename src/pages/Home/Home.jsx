import React from "react";
import HomeBanner from "../../component/HomeBanner/HomeBanner";
import MainContent from "../../component/MainContent";
const Home = () => {
  return (
    <div>
      {/* <h1>Navbar</h1>
      <Outlet /> */}
      <HomeBanner />
      {/* <Outlet /> */}
      <MainContent />
    </div>
  );
};

export default Home;
