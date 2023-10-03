"use client";
import React from "react";
import { MantineProvider } from "@mantine/core";
import Header from "./components/header/Header";
import { useRef } from "react";

export default function Home() {
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <MantineProvider>
      <Header />
      <section>
        {/* <button onClick={handleClick}>Scroll to element</button> */}

        {/* <div style={{ height: "150rem" }} /> */}

        {/* <div ref={ref} style={{ backgroundColor: "lightblue" }}>
          Coding Beauty
        </div> */}

        {/* <div style={{ height: "150rem" }} /> */}
      </section>
    </MantineProvider>
  );
}
