import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              onClick={scrollToTop}
            >
              NG Finance
            </NavbarBrand>
            {/*<UncontrolledTooltip target="#navbar-brand">*/}
            {/*  Nostalgia Finance*/}
            {/*</UncontrolledTooltip>*/}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/*<NavItem>*/}
              {/*  <NavLink*/}
              {/*    href="#pablo"*/}
              {/*    onClick={(e) => {*/}
              {/*      e.preventDefault();*/}
              {/*      document*/}
              {/*        .getElementById("download-section")*/}
              {/*        .scrollIntoView();*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <i className="now-ui-icons arrows-1_cloud-download-93"></i>*/}
              {/*    <p>Download</p>*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              {/*<UncontrolledDropdown nav>*/}
              {/*  <DropdownToggle*/}
              {/*    caret*/}
              {/*    color="default"*/}
              {/*    href="#pablo"*/}
              {/*    nav*/}
              {/*    onClick={(e) => e.preventDefault()}*/}
              {/*  >*/}
              {/*    <i className="now-ui-icons design_app mr-1"></i>*/}
              {/*    <p>Components</p>*/}
              {/*  </DropdownToggle>*/}
              {/*  <DropdownMenu>*/}
              {/*    <DropdownItem to="/index" tag={Link}>*/}
              {/*      <i className="now-ui-icons business_chart-pie-36 mr-1"></i>*/}
              {/*      All components*/}
              {/*    </DropdownItem>*/}
              {/*    <DropdownItem*/}
              {/*      href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"*/}
              {/*      target="_blank"*/}
              {/*    >*/}
              {/*      <i className="now-ui-icons design_bullet-list-67 mr-1"></i>*/}
              {/*      Documentation*/}
              {/*    </DropdownItem>*/}
              {/*  </DropdownMenu>*/}
              {/*</UncontrolledDropdown>*/}
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  {/*<i className="now-ui-icons arrows-1_share-66 mr-1"></i>*/}
                  <i className="now-ui-icons loader_refresh spin mr-2"></i>
                  <p>Connect Wallet</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  {/*<i className="fab fa-facebook-square"></i>*/}
                  <FaTelegramPlane size={21}/>
                  <p className="d-lg-none d-xl-none">Telegram</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Enter our community on Telegram
                </UncontrolledTooltip>
              </NavItem>
              {/*<NavItem>*/}
              {/*  <NavLink*/}
              {/*    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"*/}
              {/*    target="_blank"*/}
              {/*    id="instagram-tooltip"*/}
              {/*  >*/}
              {/*    <i className="fab fa-instagram"></i>*/}
              {/*    <p className="d-lg-none d-xl-none">Instagram</p>*/}
              {/*  </NavLink>*/}
              {/*  <UncontrolledTooltip target="#instagram-tooltip">*/}
              {/*    Follow us on Instagram*/}
              {/*  </UncontrolledTooltip>*/}
              {/*</NavItem>*/}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
