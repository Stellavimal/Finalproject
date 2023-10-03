import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import './test.css';
import Navbars from "./navbar";
import Footer from "./footer";

function LoginAuth() {
    const [data, setData] = useState({ email: "", password: "", });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({ email: "", password: "", });


    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email)
            ;
    };

    const validatePassword = (password) => {
        return password.length >= 5;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const submit = () => {
        const newErrors = {};

        if (!validateEmail(data.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!validatePassword(data.password)) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        if (Object.keys(newErrors).length === 0) {
            axios.post("http://localhost:8000/api/token/", {
                email: data.email,
                password: data.password,
            }).then((res) => {
                localStorage.setItem("token", res?.data?.access);
                localStorage.setItem("userdata", JSON.stringify(res?.data?.user));

                const userData = res?.data?.user;

                if (userData.is_superuser) {
                    alert('Login Successfully!')
                    navigate("/election");
                }
                else if (userData.is_Candidate) {
                    alert('Login Successfully!')
                    navigate("/candidatehome");

                } else if (userData.is_Voters) {
                    alert('Login Successfully!')
                    navigate("/voters");
                }

                else {
                    navigate("/");
                }
            })
                .catch((error) => {
                    alert('Invalid Login!')
                    navigate("/");
                });
        }
        else {
            setErrors(newErrors);
        }
    };

    return (
        <>
            <Navbars />
            <div class="container">

                <form>
                    <div className="row">
                        <div className="col-25">
                            <label className='textbox'><b>Email</b> </label>
                        </div>
                        <div className="col-75">
                            <input type="text" style={{ color: 'black' }} name="email" onChange={handleInputChange} value={data.email} />
                            <span className="error">{errors.email}</span> <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="textbox"><b>Password</b> </label>
                        </div>
                        <div className="col-75">
                            <input type="password" style={{ color: 'black' }} name="password" onChange={handleInputChange} value={data.password} />
                            <span className="error">{errors.password}</span><br />
                        </div></div>
                    <p style={{ textAlign: "center" }}>Don't have a account <Link to='/registerauth' className="reglink" style={{ color: "black" }}>SignUp</Link></p>
                </form><div style={{ textAlign: "center" }}>
                    <Button onClick={submit} variant="success" >Login</Button></div>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
};
export default LoginAuth;
