import React from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Head from "next/head";

export default function Header() {

  return (
    <>
      <Head>
        <title>COVID-19 Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src="/coronavirus.png"/> COVID-19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#charts">Charts</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="https://github.com/alaarab/">
              <img src="/github.png"/>
            </Nav.Link>
            <Nav.Link href="https://alaarab.com/">Ala Arab</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
