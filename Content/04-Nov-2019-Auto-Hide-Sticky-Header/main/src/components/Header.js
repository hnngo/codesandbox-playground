import React, { useState } from "react";

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  window.onscroll = () => {
    const elem = document.querySelector(".header-container");
    if (
      (window.scrollY < 20 && elem.style.height === "5px") ||
      window.scrollY - prevScrollY < -30
    ) {
      setPrevScrollY(window.scrollY);
      elem.style.animation = "scrollUp 0.5s ease-in-out forwards";
    } else if (window.scrollY - prevScrollY > 30) {
      setPrevScrollY(window.scrollY);
      elem.style.animation = "scrollDown 0.5s ease-in-out forwards";
    }
  };

  return (
    <div className="header-container">
      <p>Header</p>
    </div>
  );
};

export default Header;
