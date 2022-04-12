import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/Navigation";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo/>
      </div>
      <nav>
        <Navigation/>
      </nav>
    </header>
  );
};

export default Toolbar;