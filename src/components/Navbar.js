import React, { useEffect, useState } from 'react'
import logoWhite from "../images/logo-light.png"
import logoBlack from "../images/logo-dark.png"
export default function Navbar() {
    const [isVisibleNav, setIsVisibleNav] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisibleNav(true)
        } else {
            setIsVisibleNav(false)
        }
    }
    return (
        <div className={`navbar ${isVisibleNav ? "whiteNav" : "transparentNav"}`}>
            <div class="container">
                <div class="navbar-content">
                    <div class="navbar-left"><img src={isVisibleNav ? logoBlack : logoWhite} alt="a" /></div>
                    <ul class="navbar-right">
                        <li class="sample1"><a href="/">Home</a></li>
                        <li class="sample2"><a href="/">Showcase</a></li>
                        <li class="sample3"><a href="/">About</a></li>
                        <li class="sample4"><a href="/">Portfolio</a></li>
                        <li class="sample5"><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
