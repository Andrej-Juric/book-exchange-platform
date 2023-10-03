import React from "react";
import BackgroundAnimation from "../BackgroundAnimation";
import { Button } from "@mantine/core";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <BackgroundAnimation />
      <div>
        <nav>
          <Button className="btn">LogIn</Button>
          <Button>LogOut</Button>
        </nav>
        <section className={styles.nav}>
          <h1>Royal Books</h1>
          <h3 className={styles.spanLoader}>
            <span>E</span>
            <span className="m">X</span>
            <span className="m">C</span>
            <span className="m">H</span>
            <span className="m">A</span>
            <span className="m">N</span>
            <span className="m">G</span>
            <span className="m">E</span>
            <span className="m">&nbsp;</span>
            <span className="m">y</span>
            <span className="m">o</span>
            <span className="m">u</span>
            <span className="m">r</span>
            <span className="m">&nbsp;</span>
            <span className="m">B</span>
            <span className="m">o</span>
            <span className="m">o</span>
            <span className="m">k</span>
            <span className="m">s</span>
          </h3>
        </section>
      </div>
    </div>
  );
}
