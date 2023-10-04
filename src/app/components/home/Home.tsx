import React, { useState } from "react";
import BackgroundAnimation from "../BackgroundAnimation";
import styles from "./home.module.scss";
import { Button } from "@mantine/core";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.headerContainer}>
      <BackgroundAnimation />
      <div>
        <nav>
          <Button variant="filled" color="yellow" size="md" radius="lg">
            LogIn
          </Button>
          <Button variant="filled" color="yellow" size="md" radius="lg">
            LogOut
          </Button>
        </nav>
        <section className={styles.nav}>
          <h1>Royal Books</h1>
          <h3 className={styles.spanLoader}>
            <span>E</span>
            <span>X</span>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>G</span>
            <span>E</span>
            <span>&nbsp;</span>
            <span>y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>B</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span>s</span>
          </h3>
          <Button
            onClick={handleClick}
            variant="filled"
            color="yellow"
            size="md"
            radius="xl"
          >
            About Us
          </Button>
        </section>
        <section className={styles.sectionAbout}>
          <div style={{ height: "5rem" }} />
          <div className={styles.aboutText} ref={ref}>
            <h3>What We Do</h3>
            <p>
              Exchange Book is an online platform that allows you to explore,
              discover, and exchange books with people around the world. Our
              mission is to bring books closer to people and make it easy for
              them to share their favorite stories. We not only facilitate book
              trading but also promote a reading culture through reading
              recommendations, literary events, and discussions.
            </p>
          </div>

          <div style={{ height: "50rem" }} />
        </section>
        <section className={styles.sectionBooks}>
          <div style={{ height: "5rem" }} />
          <div className={styles.aboutText}>
            <h3>Royal Books</h3>
            <p>
              As a special feature, Exchange Book offers access to "Royal
              Books," an exclusive collection available only to members of our
              organization. These books are carefully curated to provide an
              exceptional reading experience for our esteemed members. To access
              this unique collection, become a member of our organization today.
            </p>
          </div>

          <div style={{ height: "50rem" }} />
        </section>
        <section className={styles.sectionAbout}>
          <div style={{ height: "5rem" }} />
          <div className={styles.aboutText}>
            <h3>Join Us</h3>
            <p>
              Join our growing community of readers and explore the wonders of
              the literary world with us. Whether you're a passionate reader, a
              literary enthusiast, or simply looking for something new to read,
              Exchange Book is the place for you. Thank you for choosing
              Exchange Book as your literary home. We look forward to welcoming
              you to our community!
            </p>
          </div>

          <div style={{ height: "50rem" }} />
        </section>
      </div>
    </div>
  );
}
