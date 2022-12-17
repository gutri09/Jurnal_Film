import React from "react"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import logo from '../../assets/jmovie.png'
import $ from 'jquery';
import Search from '../search'
import LoginAvatar from '../avatarlogin/avatarLogin'
import axios from 'axios';

const ShowLogin = () => {
    return (
        <>
            <Link className="navbar_signin" to="/login" style={{ textDecoration: "none" }}><span>Login</span></Link>
        </>
    );
};

export default function Header() {
    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 30) {
                $(".navbar").css("background", "black");
                $(".navbar").css("transition", "0.3s");
            }
            else {
                $(".navbar").css("background", "transparent");
            }
        })
    })
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = React.useState(false);
    React.useEffect(() => {
        // 2. buat fungsi verifikasi token yang sama seperti di halaman home
        const verifikasi = async () => {
          try {
            const response = await axios.post(
              `${process.env.REACT_APP_BACKEND_URL}/verify`,
              {
                token: localStorage.getItem("token"),
              }
            );
    
            if (response.status == 200) {
              setIsLogin(true);
            } else {
              setIsLogin(false);
            }
          } catch (error) {
            console.log(error);
          }
        };
        // panggil fungsi verifikasi token di bawah sini
        verifikasi();
      }, []);
    
    //   const handleCheckout = async (event) => {
    //     event.preventDefault();
    //     const isLogin = localStorage.getItem("token");
    //     if (isLogin) {
    //       window.location.href = "/checkout";
    //     } else {
    //       window.location.href = "/login";
    //     }
    //   };


    return (
        <nav class="navbar container">
            {/* <img className="header__icon" src={logo}/> */}
            <Link className="navbar_title" to="/" style={{ textDecoration: "none" }}><span className="header__icon_title">JurnalFilm</span></Link>
            <div class='container_input'>
                <input type="text" id="searchInput" placeholder="Search Movie..." />
            </div>
            {/* <Search/> */}
            <div class="menu" id="menu">
                <ul class="menu-inner">
                    <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                    <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                    <Link to="/about" style={{ textDecoration: "none" }}><span>About</span></Link>
                </ul>
            </div>
            <div>
                {isLogin ? <LoginAvatar/>: <ShowLogin/> }
            </div>

        </nav>
        // <div className="header">

        //     <div className="headerLeft">

        //     </div>
        // </div>
    )
}

