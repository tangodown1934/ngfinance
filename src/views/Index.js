import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/*<Images />*/}
          <div className="section section-about-us">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Token details</h2>
                  <h5 className="description">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice extent in the Pacific and a late drop in ice extent
                    in the Barents Sea.
                  </h5>
                </Col>
              </Row>
              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row>
                  <Col md="6">
                    <div
                        className="image-container image-left"
                        style={{
                          backgroundImage:
                              "url(" + require("assets/img/login.jpg").default + ")",
                        }}
                    >
                      <p className="blockquote blockquote-info">
                        "Over the span of the satellite record, Arctic sea ice has
                        been declining significantly, while sea ice in the
                        Antarctichas increased very slightly" <br></br>
                        <br></br>
                        <small>-NOAA</small>
                      </p>
                    </div>
                    <div
                        className="image-container"
                        style={{
                          backgroundImage:
                              "url(" + require("assets/img/bg3.jpg").default + ")",
                        }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div
                        className="image-container image-right"
                        style={{
                          backgroundImage:
                              "url(" + require("assets/img/bg1.jpg").default + ")",
                        }}
                    ></div>
                    <h3>
                      So what does the new record for the lowest level of winter
                      ice actually mean
                    </h3>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                    <p>
                      For a start, it does not automatically follow that a record
                      amount of ice will melt this summer. More important for
                      determining the size of the annual thaw is the state of the
                      weather as the midnight sun approaches and temperatures
                      rise. But over the more than 30 years of satellite records,
                      scientists have observed a clear pattern of decline,
                      decade-by-decade.
                    </p>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens with climate change. Even if the
                      Arctic continues to be one of the fastest-warming regions of
                      the world, it will always be plunged into bitterly cold
                      polar dark every winter. And year-by-year, for all kinds of
                      natural reasons, there’s huge variety of the state of the
                      ice.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <div className="section section-team text-center">
            <Container>
              <h2 className="title">Token Details</h2>
              <div className="team">
                <Row>
                  <Col md="4">
                    <div className="team-player">
                      {/*<img*/}
                      {/*    alt="..."*/}
                      {/*    className="rounded-circle img-fluid img-raised"*/}
                      {/*    src={require("assets/img/member1.jpg").default}*/}
                      {/*></img>*/}
                      <h4 className="title">CONTRACT</h4>
                      {/*<p className="category text-info">Model</p>*/}
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      {/*<img*/}
                      {/*    alt="..."*/}
                      {/*    className="rounded-circle img-fluid img-raised"*/}
                      {/*    src={require("assets/img/member2.jpg").default}*/}
                      {/*></img>*/}
                      <h4 className="title">90% LOCKED LIQUIDITY</h4>
                      {/*<p className="category text-info">Designer</p>*/}
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      {/*<img*/}
                      {/*    alt="..."*/}
                      {/*    className="rounded-circle img-fluid img-raised"*/}
                      {/*    src={require("assets/img/member2.jpg").default}*/}
                      {/*></img>*/}
                      <h4 className="title">10% TEAM TOKENS</h4>
                      {/*<p className="category text-info">Designer</p>*/}
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <div className="section section-team text-center">
            <Container>
              <h2 className="title">Here is our team</h2>
              <div className="team">
                <Row>
                  <Col md="6">
                    <div className="team-player">
                      <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/member1.jpg").default}
                      ></img>
                      <h4 className="title">CRYPTO BOKJISA</h4>
                      {/*<p className="category text-info">Model</p>*/}
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="team-player">
                      <img
                          alt="..."
                          className="rounded-circle img-fluid img-raised"
                          src={require("assets/img/member2.jpg").default}
                      ></img>
                      <h4 className="title">CRYPTO DEVELOPER</h4>
                      {/*<p className="category text-info">Designer</p>*/}
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/*<BasicElements />*/}
          {/*<Navbars />*/}
          {/*<Tabs />*/}
          {/*<Pagination />*/}
          {/*<Notifications />*/}
          {/*<Typography />*/}
          {/*<Javascript />*/}
          {/*<Carousel />*/}
          {/*<NucleoIcons />*/}
          {/*<CompleteExamples />*/}
          {/*<SignUp />*/}
          {/*<Examples />*/}
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
