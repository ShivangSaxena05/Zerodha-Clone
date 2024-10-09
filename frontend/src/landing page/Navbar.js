import { Route, Routes } from "react-router-dom";
import axios from "axios"
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function Navbar() {



    // const navigate = useNavigate();
    // const [cookies, removeCookie] = useCookies([]);
    // const [username, setUsername] = useState("");
    // useEffect(() => {
    //     const verifyCookie = async () => {
    //         if (!cookies.token) {
    //             navigate("/login");
    //         }
    //         const { data } = await axios.post(
    //             "http://localhost:3002/",
    //             {},
    //             { withCredentials: true }
    //         );
    //         const { status, user } = data;
    //         setUsername(user);
    //         return status
    //             ? toast(`Hello ${user}`, {
    //                 position: "top-right",
    //             })
    //             : (removeCookie("token"), navigate("/login"));
    //     };
    //     verifyCookie();
    // }, [cookies, navigate, removeCookie]);
    // const Logout = () => {
    //     removeCookie("token");
    //     navigate("/signup");
    // };

    return (
        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "white" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/"><img src="media/images/logo.png" style={{ width: "23%" }} alt="logo" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/Product">
                                    Products
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/Pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="Support">Support </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/"><i class="fa fa-bars" aria-hidden="true"></i> </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;