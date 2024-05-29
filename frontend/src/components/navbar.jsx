import React from "react"
import { Link } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import logo from "../assets/Twhitebackground.png"
import { ThemeToggle } from "./themeToggle"
import LoginButton from "./loginButton"
import LogoutButton from "./logoutButton"

export const NavBar = () => {
    return <div className="navbar">
        <div className="logo">
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
        </div>
        <div className="links">
            <Link to="/profile">Profile</Link>
            <Link to="/"> Shop </Link>
            <Link to="/cart"> 
                <ShoppingCart size={32} />
            </Link>
            <ThemeToggle/>
            <Link>
                <LoginButton/>
            </Link>
            <Link>
                <LogoutButton/>
            </Link>
        </div>
    </div>
}