import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My portfolio"
        icon={<BsFillInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Portfolio;
