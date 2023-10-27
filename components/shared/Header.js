import React,{memo} from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  HiOutlineBell,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";

import Logo from "../../public/images/logo.png";

const Header = () => {
  const router = useRouter();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/bookings", label: "Bookings" },
    { href: "/patients", label: "My Patients" },
    { href: "/payments", label: "Payments" },
    { href: "/profile", label: "Profile Setting" },
    { href: "/subscription", label: "Subscription" },
    { href: "/support", label: "Customer Support" },
  ];

  return (
    <div className="header-">
      <Navbar className="header-navbar px-4" expand="lg">
        <Navbar.Brand>
          <Image src={Logo} height={60} width={60} alt="Brand Logo" /> Doctor
          App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            {navLinks.map((link) => (
              <Nav.Link
                href={link.href}
                style={{ textDecoration: "none", color: "white" }}
                className={router.route === link.href ? "active-link" : ""}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex align-items-center">
            <HiOutlineChatBubbleOvalLeftEllipsis
              color="white"
              size={20}
              className="icon mr-2"
            />
            <HiOutlineBell color="white" size={20} className="icon" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default  memo(Header);
