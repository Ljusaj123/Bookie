import Footer from '../modules/footer/Footer'
import Navbar from '../components/Navbar'
import { MdEmail } from 'react-icons/md';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const Register = () => {
    return (
        <section className="register">
            <header>
                <Navbar />
            </header>
            <div className="register-container">
                <h1>Register</h1>
                <form className="register-form">

                    <div className="name-surname-container">
                        <input type="text" className="name" placeholder="first name" />
                        <input type="text" className="surname" placeholder="last name" />
                    </div>

                    <div className="email-container">
                        <MdEmail />
                        <input type="text" className="email" placeholder="enter your email" />
                    </div>

                    <div className="username-container">
                        <FaUserAlt />
                        <input type="text" className="username" placeholder="enter your username" />
                    </div>

                    <div className="password-container">
                        <FaLock />
                        <input type="password" className="password" placeholder="enter your password" />
                    </div>
                    <div className="confirm-password-container">
                        <FaLock />
                        <input type="password" className="confirm-password" placeholder="enter your password" />
                    </div>
                    <button>
                        Create account
                    </button>
                </form>
            </div>
            <Footer />
        </section>
    )
}

export default Register;