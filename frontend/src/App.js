import React, { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
    const [signupdata, setsignupData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [signindata, setsigninData] = useState({
        email: "",
        password: "",
    });
    const handlesigninchange = (event) => {
        const { name, value } = event.target;
        setsigninData((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };
    const handlesignupchange = (event) => {
        const { name, value } = event.target;
        setsignupData((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };
    const submitsigninData = () => {
        console.log("sign in me ghus rha h");
        axios
            .post("https://localhost:5001/api/auth", signindata)
            .then(() => console.log("user logged in"))
            .catch((err) => {
                console.error(err);
            });
    };
    const submitsignupData = () => {
        console.log("sign up me ghus rha h");
        axios
            .post("https://localhost:5001/api/users", signupdata)
            .then(() => console.log("User Created"))
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <div className="App">
            <div className="cont">
                <div className="form sign-in">
                    <h2>Welcome</h2>
                    <label>
                        <span>Email</span>
                        <input
                            type="email"
                            name="email"
                            value={signindata.email}
                            onChange={handlesigninchange}
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            name="password"
                            value={signindata.password}
                            onChange={handlesigninchange}
                        />
                    </label>
                    {/* {<p className="forgot-pass">Forgot password?</p> } */}
                    <button
                        type="button"
                        className="submit"
                        onClick={submitsigninData}
                    >
                        Sign In
                    </button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h3>Don't have an account? Please Sign up!</h3>
                        </div>
                        <div className="img__text m--in">
                            <h3>
                                If you already has an account, just sign in.
                            </h3>
                        </div>
                        <div
                            className="img__btn"
                            onClick={() => {
                                document
                                    .querySelector(".cont")
                                    .classList.toggle("s--signup");
                            }}
                        >
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Create your Account</h2>
                        <label>
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                value={signupdata.name}
                                onChange={handlesignupchange}
                            />
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={signupdata.email}
                                onChange={handlesignupchange}
                            />
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                name="password"
                                value={signupdata.password}
                                onChange={handlesignupchange}
                            />
                        </label>
                        <button
                            type="button"
                            className="submit"
                            onClick={submitsignupData}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
