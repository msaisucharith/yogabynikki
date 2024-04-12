import { useState } from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      <div className={Styles.nav}>
        <p className={Styles.icon}>Yoga by Nikki</p>

        <div className={Styles.menu}>
          <img
            src={
              menuopen
                ? "https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
                : "https://static.thenounproject.com/png/419880-200.png"
            }
            className={Styles.menuicon}
            onClick={() => setmenuopen(!menuopen)}
          />

          <ul className={Styles.menuitem}>
            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <a href="#contact">Contact us</a>
            </li>

            <li>
              <a href="#contact">Book Online</a>
            </li>
            <li>
              <a href="/Schedule">Schedule</a>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>

          <div className={`${Styles.dropdown} ${menuopen && Styles.inactive}`}>
            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <a href="#contact">Contact us</a>
            </li>

            <li>
              <a href="#contact">Book Online</a>
            </li>
            <li>
              <a href="/Schedule">Schedule</a>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
