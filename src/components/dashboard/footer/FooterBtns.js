import React from "react";
import { Search, PencilFill } from "react-bootstrap-icons";

const FooterBtns = (props) => {
  console.log(props);
  return (
    <div className="col-12 col-sm-2 footer_btns_container">
      <span onClick={props.setSearch}>
        <Search size={20} />
      </span>
      <span className="ml-4" onClick={props.setAdd}>
        <PencilFill size={20} />
      </span>
    </div>
  );
};

export default FooterBtns;
