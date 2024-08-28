import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsFillInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Contact;
