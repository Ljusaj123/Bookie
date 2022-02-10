import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="bookie-footer">
                    <h1>Bookie</h1>
                    <h2>Powered by Vercel</h2>
                </div>
                <div className="contact-footer">
                    <h1>Contact Us</h1>
                    <form className="contact-us-form">
                        <input type="text" placeholder="your name..." />
                        <input type="email" placeholder="youremail@mail.com" />
                        <textarea placeholder="your message here...">
                        </textarea>
                        <button className="send-btn">
                            Send
                        </button>
                    </form>

                </div>
                <div className="made-by-footer">
                    <h1>Made with love by Rosmarina</h1>
                    <div className="social-icons-footer">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaWhatsapp /></a>
                        <a href=""><FaLinkedinIn /></a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;