"use client";
import "./Footer.css";
import { Footer } from "flowbite-react";

export function Component() {
  return (
    <Footer container id="stickyFooterBottom">
      <Footer.Copyright href="#" by="Adrian Malaguti™" year={2025} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
