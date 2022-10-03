import React from 'react'
import logo from "../images/logo-light.png"
export default function Navbar() {
    return (
        <div className='navbar'>
            <div class="container">
                <div class="navbar-content">
                    <div class="navbar-left"><img src={logo} alt="a" /></div>
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
