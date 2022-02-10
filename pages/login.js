import Footer from "../modules/footer/footer";
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <section className="login">
            <header></header>
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-form">
                    <div className="username-container">
                        <FaUserAlt />
                        <input type="text" className="username" placeholder="enter your username" />
                    </div>
                    <div className="password-container">
                        <FaLock />
                        <input type="password" className="password" placeholder="enter your password" />
                    </div>
                    <button>
                        Login
                    </button>
                </form>
                <div className="no-account">
                    <p>don't have an account yet? <a href="#">Register now</a></p>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default Login;