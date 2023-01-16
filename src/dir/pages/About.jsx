import React, { Fragment, useLayoutEffect } from "react";

import Footer from "../components/reusable/Footer";
import Intro from "../components/categories/about/Intro";
import Carouse from "../components/categories/about/Carouse";
import WhoAreWe from "../components/categories/about/WhoAreWe";
import Teams from "../components/categories/about/Teams";
import Navbar from "../components/reusable/Navbar";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <Navbar />

      <div className="my-4">
        <Intro />
      </div>
      <div className="my-4">{/* <Carouse /> */}</div>

      <div className="my-4">
        <WhoAreWe />
      </div>
      <div className="my-4">
        <Teams />
      </div>

      <div className="my-4">
        <Footer />
      </div>
    </Fragment>
  );
}

export default About;
