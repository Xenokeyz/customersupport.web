import React from "react";
import instagram from "../../assets/instagram_icon.svg";
import facebook from "../../assets/facebook_icon.svg";
import twitter from "../../assets/twitter_icon.svg";
import logoLight from "../../assets/logo_light.svg";
import contact from "../../assets/call_connect.svg";
import email from "../../assets/email_line.svg";
import pin from "../../assets/map_pin.svg";
import utils from "../../utils.module.scss";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={utils.container}>
        <div className={utils.d_grid} style={{ "--gap": 0 }}>
          <div className={styles.footer__content}>
            <div
              className={`${utils.d_grid} ${utils.lg_d_flex} ${utils.align_items_flex_start}`}
              style={{ "--gap": "48px", "--lg-gap": "min(20%, 338px)" }}
            >
              <div className={`${utils.d_grid}`} style={{ "--gap": "16px" }}>
                <div>
                  <img src={logoLight} alt="light scrybe logo" />
                </div>

                <div className={utils.d_grid} style={{ "--gap": "12px" }}>
                  <p>Join our community</p>

                  <div className={utils.d_flex} style={{ "--gap": "16px" }}>
                    <a href="#instagram">
                      <img src={instagram} alt="instagram icon" />
                    </a>

                    <a href="#instagram">
                      <img src={facebook} alt="facebook icon" />
                    </a>

                    <a href="#instagram">
                      <img src={twitter} alt="twitter icon" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`${utils.d_grid} ${utils.md_d_flex} ${utils.align_items_flex_start}`}
                style={{ "--gap": "56px", "--md-gap": "90px" }}
              >
                <div
                  className={`${utils.d_flex} ${utils.align_items_flex_start}`}
                  style={{ "--gap": "90px" }}
                >
                  <div className={utils.d_grid} style={{ "--gap": "8px" }}>
                    <p className={styles.footer__link_title}>Explore</p>

                    <ul className={utils.d_grid} style={{ "--gap": "24px" }}>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Why Scrybe
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          How it works
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Solution
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className={utils.d_grid} style={{ "--gap": "8px" }}>
                    <p className={styles.footer__link_title}>Quick links</p>

                    <ul className={utils.d_grid} style={{ "--gap": "24px" }}>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Authentication
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Billing and pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Accounts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Events
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Faq
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Partnership
                        </a>
                      </li>
                      <li>
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          Help & Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={utils.d_grid} style={{ "--gap": "8px" }}>
                  <p className={styles.footer__link_title}>Quick links</p>

                  <ul className={utils.d_grid} style={{ "--gap": "24px" }}>
                    <li>
                      <div className={utils.d_flex} style={{ "--gap": "20px" }}>
                        <img src={contact} alt="contact line" />
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          +2348790900976
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className={utils.d_flex} style={{ "--gap": "20px" }}>
                        <img src={email} alt="contact line" />
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          +2348790900976
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className={utils.d_flex} style={{ "--gap": "20px" }}>
                        <img src={pin} alt="contact line" />
                        <a
                          href="#home"
                          className={`${utils.d_flex} ${styles.footer__link}`}
                        >
                          +2348790900976
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="quick">
            <p
              className={`${utils.d_flex} ${styles.footer__copyright}`}
              style={{ "--gap": "8px" }}
            >
              <span>&copy;</span>

              <span>Copyright 2022 | Scrybe</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
