import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import utils from "../../utils.module.scss";
import styles from "./styles.module.scss";
import HeroImage2 from "../../assets/heroImage2.png";
import searchIcon from "../../assets/search_24px.svg";
import rectangle from "../../assets/rectangle1.svg";
import arrowRight from "../../assets/arrow-right.svg";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <div>
        <div className={styles.blogpage__hero}>
          <div className={utils.container}>
            <div
              className={`${utils.d_grid} ${utils.lg_d_flex} ${utils.align_items_center} ${styles.blogpage__hero_content}`}
            >
              <div>
                <img src={HeroImage2} alt="" />
              </div>

              <div className={styles.blogpage__hero_text}>
                <p>
                  Get inspired with our awesome <span>blog</span> posts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.blogpage__post_section}>
          <div className={utils.container}>
            <div className={utils.d_grid} style={{ "--gap": "32px" }}>
              {/* bread crumb */}
              <div
                className={`${utils.d_flex} ${styles.blogpage__breadcrum}`}
                style={{ "--gap": "16px" }}
              >
                <a href="#home">Home</a>
                <a
                  href="#blog"
                  className={styles.blogpage__breadcrum_current}
                  disabled
                >
                  Blog
                </a>
              </div>

              <div className={utils.d_grid} style={{ "--gap": "40px" }}>
                {/* posts */}
                <div className={utils.d_grid} style={{ "--gap": "56px" }}>
                  {/* search field */}
                  <div>
                    <form action="#" className={styles.blogpage__search}>
                      <input type="search" placeholder="Search  Blog" />
                      <img src={searchIcon} alt="search icon" />
                    </form>
                  </div>

                  {/* items */}
                  <div className={styles.blogpage__blogposts}>
                    {/* item */}
                    {Array(9)
                      .fill(null)
                      .map((_, i) => {
                        return (
                          <div
                            key={Math.random().toString(36)}
                            className={`${utils.d_grid} ${styles.blogpost}`}
                            style={{ "--gap": 0 }}
                          >
                            <div>
                              <Link
                                to={`/blog/${i}`}
                                className={styles.blogpost__body}
                              >
                                <img
                                  src={rectangle}
                                  alt="blog post illustration"
                                />
                              </Link>
                            </div>

                            <div
                              className={`${utils.d_grid} ${styles.blogpost__content}`}
                              style={{ "--gap": "8px" }}
                            >
                              {/* date and tag */}
                              <div>
                                <p className={utils.d_flex}>
                                  <span>Tech News</span>

                                  <span>Nov 17, 2022</span>
                                </p>
                              </div>

                              {/* content */}
                              <div
                                className={utils.d_grid}
                                style={{ "--gap": "20px" }}
                              >
                                <div>
                                  <Link
                                    to={`/blog/${i}`}
                                    className={styles.blogpost__body}
                                  >
                                    The Surprising Way to Solve Your Customer
                                    Experience Problem: Customer Insight
                                  </Link>
                                </div>

                                <div
                                  className={`${utils.d_none} ${utils.md_d_block}`}
                                >
                                  <Link
                                    className={`${utils.d_flex} ${styles.blogpost__readmore}`}
                                    style={{ "--gap": "10px" }}
                                    to={`/blog/${i}`}
                                  >
                                    <span>Read More</span>{" "}
                                    <img
                                      src={arrowRight}
                                      alt="arrow right icon"
                                    />{" "}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* !item */}
                  </div>
                </div>

                {/* Pagination */}
                <div
                  className={`${utils.d_flex} ${utils.justify_content_center}`}
                >
                  <div
                    className={`${utils.d_flex} ${utils.align_items_center}`}
                    style={{ "--gap": "17px" }}
                  >
                    <div className={utils.d_flex} style={{ "--gap": "8px" }}>
                      <a
                        className={`${styles.pagination__link} ${styles["pagination__link--current"]}`}
                        href="#one"
                      >
                        1
                      </a>
                      <a className={styles.pagination__link} href="#one">
                        2
                      </a>
                      <a className={styles.pagination__link} href="#one">
                        3
                      </a>
                      <a
                        className={`${styles.pagination__link} ${utils.d_none} ${utils.md_d_block}`}
                        href="#one"
                      >
                        4
                      </a>
                      <a
                        className={`${styles.pagination__link} ${utils.d_none} ${utils.md_d_block}`}
                        href="#one"
                      >
                        5
                      </a>
                    </div>

                    <div>
                      <a className={styles.pagination__link} href="#next">
                        <img src={arrowRight} alt="arrow right icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
