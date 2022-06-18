import { Link, Route, Routes } from "react-router-dom";

import { useRef, useState, useEffect } from "react";
import { BasketProvider } from "./contexts/basket";
import { gsap } from "gsap";

import Home from "./routes/Home";
import CampingInfo from "./routes/CampingInfo";
import Booking from "./routes/Booking";
import Confirmation from "./routes/Confirmation";

import logo from "./images/logo_light.svg";

function App() {
  //--BURGERMENU--

  //Deifinition af state og updater funktion til at updatere state
  const [menuOpen, setMenuOpen] = useState(false);

  //funktion der toggler imellem true og false i state
  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }
  //definerer af menuRef er en useRef()
  const menuRef = useRef();

  //Tilføjer animation på rigtige DOM-element vha. GSAP og useRef
  useEffect(() => {
    gsap.from(menuRef.current, { x: 1200 });
    gsap.to(menuRef.current, { duration: 0.8, x: 0 });
  });

  return (
    <div className="App">
      <section id="navigation">
        <nav>
          <div id="logo_wrapper">
            <a href="https://exam-app-hwaiting.netlify.app/">
              {" "}
              <img src={logo} className="logo" alt="" />
            </a>

            <p>8/8-14/8</p>
          </div>
          {/* tilsætter dynamisk class på menuen der lytter efter om state er true eller false */}
          <div id="menu" ref={menuRef} className={menuOpen ? null : "inactive"}>
            <ul>
              <li>
                {/* kalder på togglefunktion ved click på menu links */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  id="header_link"
                  className="nav-link"
                  href="https://exam-app-hwaiting.netlify.app/"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">Home</p>{" "}
                </a>
              </li>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/camping-info"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">Camping Info</p>{" "}
                </Link>
              </li>
              <li>
                <Link
                  id="header_link"
                  className="nav-link"
                  to="/booking"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">Start Booking</p>{" "}
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  id="header_link"
                  className="nav-link"
                  href="https://exam-app-hwaiting.netlify.app/artists"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">See Artist</p>{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  id="header_link"
                  className="nav-link"
                  href="https://exam-app-hwaiting.netlify.app/program"
                  onClick={ToggleBurgermenu}
                >
                  {" "}
                  <p className="link-p">See Schedule</p>{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* kalder på togglefunktion ved klik på burgericon */}
          <div id="burgermenu" onClick={ToggleBurgermenu}>
            {/* laver dynamisk class til enkelte burgermenu streger som får css animation hvis state er true */}
            <span id="bar1" className={menuOpen ? "active1" : null}></span>
            <span id="bar2" className={menuOpen ? "active2" : null}></span>
            <span id="bar3" className={menuOpen ? "active3" : null}></span>
          </div>
        </nav>
      </section>
      {/* basketprovider rundt om vores main routes, så hele booking får adgang til basketContext  */}
      <BasketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="camping-info" element={<CampingInfo />} />

          <Route path="booking/*" element={<Booking />} />

          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </BasketProvider>
    </div>
  );
}

export default App;
