import React from "react";
import menu from "../../assets/menu_24px.svg";
import scrybeLogo from "../../assets/scrybe_logo_with_text.svg";
import search from "../../assets/search_24px.svg";
import utils from "../../utils.module.scss";
import Button from "../Button";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={utils.container}>
        <div className={`${utils.d_flex} ${styles.header__content}`}>
          <img
            src={scrybeLogo}
            className={styles.header__logo}
            alt="scrybeLogo"
          />

          <div className={`${utils.d_none} ${utils.lg_d_block}`}>
            <div className={utils.d_flex}>
              <a className={styles.header__nav_item} href="#home">
                Home
              </a>
              <a className={styles.header__nav_item} href="#service">
                Services
              </a>
              <a className={styles.header__nav_item} href="#solution">
                Solutions
              </a>
              <a className={styles.header__nav_item} href="#pricing">
                Pricing
              </a>
              <a className={styles.header__nav_item} href="#home">
                Industry
              </a>
              <a className={styles.header__nav_item} href="#home">
                About Us
              </a>
            </div>
          </div>

          <div className={`${utils.d_none} ${utils.lg_d_block}`}>
            <div className={utils.d_flex}>
              <Button outlined href="#login">
                Login
              </Button>

              <Button href="#try">Try for Free</Button>
            </div>
          </div>

          <div className={utils.lg_d_none}>
            <div className={utils.d_flex} style={{ "--gap": "27px" }}>
              <Button icon type="button">
                <img src={search} alt="search icon" />
              </Button>

              <Button icon type="button">
                <img src={menu} alt="menu icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
