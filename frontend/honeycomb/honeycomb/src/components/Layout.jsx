import React from "react";
import BottomNavigation from "./BottomNavigation";

function Layout({ children, title, subtitle, activeIcon }) {
  return (
    <div className="screen">
      <div className="content">
        <div className="container">
          {title && <h1 className="title">{title}</h1>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>

      <div className="footer">
        <BottomNavigation activeIcon={activeIcon} />
      </div>
    </div>
  );
}

export default Layout;
