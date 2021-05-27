/*eslint-disable*/
import React from "react";
import { FaTelegram } from "react-icons/fa";

// reactstrap components
import {Button,Container} from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header4.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* maybe logo ? */}
            {/*<img*/}
            {/*  alt="..."*/}
            {/*  className="n-logo"*/}
            {/*  src={require("assets/img/now-logo.png").default}*/}
            {/*></img>*/}
            {/*<h1 className="h1-seo">Nostalgia Finance</h1>*/}
            <h1 className="title">Nostalgia Finance</h1>
            <h2>Programmable money for the Nostalgia.</h2>
            <h3>
              Simply hold NG Token in your wallet and you will get more.

              On each transaction the protocol automatically distributes
              rewards to holders as well as auto-locks liquidity forever.
            </h3>

            <Button className="btn-round" color="info" type="button" size="lg">
              <FaTelegram size={30}/>
              &nbsp;&nbsp;&nbsp;&nbsp;Join the community
            </Button>

            {/*<Button*/}
            {/*    className="btn-icon btn-round"*/}
            {/*    color="info"*/}
            {/*    href="#pablo"*/}
            {/*    onClick={(e) => e.preventDefault()}*/}
            {/*>*/}
            {/*  <i className="fab fa-twitter"></i>*/}
            {/*</Button>*/}

            {/*<Button*/}
            {/*    className="btn-icon btn-round"*/}
            {/*    color="info"*/}
            {/*    href="#pablo"*/}
            {/*    onClick={(e) => e.preventDefault()}*/}
            {/*>*/}
            {/*  <i className="fab fa-google-plus"></i>*/}
            {/*</Button>*/}
          </div>
          {/*<h6 className="category category-absolute">*/}
          {/*  Designed by{" "}*/}
          {/*  <a href="http://invisionapp.com/?ref=creativetim" target="_blank">*/}
          {/*    <img*/}
          {/*      alt="..."*/}
          {/*      className="invision-logo"*/}
          {/*      src={require("assets/img/invision-white-slim.png").default}*/}
          {/*    ></img>*/}
          {/*  </a>*/}
          {/*  . Coded by{" "}*/}
          {/*  <a*/}
          {/*    href="https://www.creative-tim.com?ref=nukr-index-header"*/}
          {/*    target="_blank"*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      alt="..."*/}
          {/*      className="creative-tim-logo"*/}
          {/*      src={require("assets/img/creative-tim-white-slim2.png").default}*/}
          {/*    ></img>*/}
          {/*  </a>*/}
          {/*  .*/}
          {/*</h6>*/}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
