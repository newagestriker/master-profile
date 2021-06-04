import React from "react";
import dotnetcore3 from "../../../src/images/dotnetcore3.jpg";
import nodejs from "../../../src/images/node-js.png";
import react from "../../../src/images/react-1.png";
import AnimatedArrow from "../../shared-components/animated-arrow-button";
import SecondaryHeading from "../../shared-components/secondary-heading";
import TertiaryHeading from "../../shared-components/tertiary-heading";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text">
          <SecondaryHeading
            heading="I have a very interesting bio"
            classes="u-margin-bottom-big"
          />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <TertiaryHeading
              heading="You will fall in love with Technology"
              classes="heading-tertiary--highlight u-margin-bottom-small"
            />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repellendus eaque non. Quis fugiat fuga nemo corporis rem eligendi
              beatae, eius aliquid ab vero magni voluptatibus, impedit commodi
              mollitia reprehenderit!
            </p>
            <TertiaryHeading
              heading="You will fall in love with Technology"
              classes="heading-tertiary--highlight u-margin-bottom-small"
            />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repellendus eaque non. Quis fugiat fuga nemo corporis rem eligendi
              beatae, eius aliquid ab vero magni voluptatibus, impedit commodi
              mollitia reprehenderit!
            </p>
            <AnimatedArrow buttonText="Learn More" href="#top" />
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nodejs}
                alt="Node Js"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={react}
                alt="React"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={dotnetcore3}
                alt="Dot Net Core"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-medium">
                Explore the world
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                dicta nemo asperiores, aspeesse facilis natus assumenda dolorum
                autem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-medium">
                Meet nature
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                dicta nemo asperiores, aspeesse facilis natus assumenda dolorum
                autem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary u-margin-bottom-medium">
                Find Your Way
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                dicta nemo asperiores, aspeesse facilis natus assumenda dolorum
                autem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart "></i>
              <h3 className="heading-tertiary u-margin-bottom-medium">
                Lead A Healthier Life
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                dicta nemo asperiores, aspeesse facilis natus assumenda dolorum
                autem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-tours">
        <div className="u-center-text  u-margin-bottom-big">
          <h2 className="heading-secondary">
            Take tour of my Language Profile
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span-1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#top" className="btn btn--white">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span-2">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#top" className="btn btn--white">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3"></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span-3">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#top" className="btn btn--white">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-center-text  u-margin-bottom-big">
          <a href="#top" className="btn btn--green">
            Discover All Tours
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
