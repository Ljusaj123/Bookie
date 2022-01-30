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
                    <h2>Made with love by Rosmarina</h2>
                    <div className="social-icons-footer">
                        <a href="">f</a>
                        <a href="">i</a>
                        <a href="">w</a>
                        <a href="">s</a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;