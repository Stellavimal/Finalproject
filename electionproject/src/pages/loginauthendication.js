import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import './test.css'

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
                    navigate("/AdminPage");
                }
                else if (userData.is_staff) {
                    alert('Login Successfully!')
                    navigate("/VisitorNavbar");
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
            <div class="container">

                <form>
                    <div className="row">
                        <div className="col-25">
                            <label className='textbox'>Email </label>
                        </div>
                        <div className="col-75">
                            <input type="text" style={{ color: 'black' }} name="email" onChange={handleInputChange} value={data.email} />
                            <span className="error">{errors.email}</span> <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="textbox">Password </label>
                        </div>
                        <div className="col-75">
                            <input type="password" style={{ color: 'black' }} name="password" onChange={handleInputChange} value={data.password} />
                            <span className="error">{errors.password}</span><br />
                        </div></div>
                    <p>don't have a account <Link to='/register' className="reglink">SignUp</Link></p>
                </form>
                <Button onClick={submit}  variant="success">Login</Button>
            </div>
        </>
    );
};
export default LoginAuth;
