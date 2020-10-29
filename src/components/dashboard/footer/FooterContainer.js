import React from "react";
import "./footer.scss";
import { Search } from "react-bootstrap-icons";
import FooterBtns from "./FooterBtns";
import FilterBtns from "./FilterBtns";

const FooterContainer = (props) => {
  return (
    <div className="footer_container mt-5 row justify-content-center col-12">
      <FooterBtns {...props} />
      <FilterBtns />
    </div>
  );
};

export default FooterContainer;
