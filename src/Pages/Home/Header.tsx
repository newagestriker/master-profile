import * as React from "react";

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__heading">
        <div className="img--circle" aria-label="Sk Ramizuddin" />
        <div className="header__text-box">
          <h1 className="header__heading-primary">
            <span className="header__heading-primary--main">Hi, I'm Ramiz</span>
            <span className="header__heading-primary--sub">
              Web Developer at day, Android Developer at night
            </span>
          </h1>
          <a className="btn btn--white btn--animated" href="#top">
            Get to know me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
