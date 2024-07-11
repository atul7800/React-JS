import React, { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  function darkLightMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => darkLightMode()}>
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
