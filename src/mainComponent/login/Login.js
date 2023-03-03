import { useNavigate,NavLink} from "react-router-dom";
import "./login.scss";
export default function Login() {
    const navigater=useNavigate();
    function login(){
        navigater('/home') 
    }
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className="logo"
                        src="https://www.coolgenerator.com/Data/Textdesign/202302/9db2c666450e286ebee5855807717826.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form onSubmit={login}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" required />
                <input type="password" placeholder="Password" required />
                <button className="loginButton">Sign In</button>
                <span>New to MovieHere? <b><NavLink className='navbar-link' to='/register'>Sign up now</NavLink></b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                </small>

                </form>


            </div>
        </div>
    )
}
