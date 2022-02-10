import Footer from "../modules/footer/footer";

const About = () => {
    return (
        <section className="about">
            <header>
                {/* ovdje ce biti header */}
            </header>
            <main className="introduction">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consequatur libero corporis iusto nam earum nemo alias
                    vel cumque, distinctio magni minus, quas dolor non porro ipsam
                    saepe. Voluptates, iusto? Laudantium placeat id accusantium
                    recusandae cupiditate vitae est inventore? Rerum dolores hic
                    minus rem labore beatae maiores sequi facilis excepturi
                    voluptatibus itaque obcaecati, ut pariatur, accusantium sunt
                    nihil optio quo ipsa exercitationem impedit aspernatur! Natus
                    rem cupiditate voluptates quibusdam suscipit, et animi cum,
                    dolores ullam at porro ipsa consectetur similique repellendus
                    esse officia beatae eligendi laborum iure sint dolorum velit
                    ducimus deleniti! Iusto quis culpa voluptate tempore autem
                    reprehenderit aliquam?
                </p>
            </main>
            <section className="vision">
                <div className="picture-container">
                    <div><p>slika se ne učitaje</p></div>
                </div>
                <div className="text-container">
                    <h1>Our Vision</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum molestias aliquam, maiores distinctio quia voluptatem
                        inventore soluta facilis nisi qui? Odit, culpa blanditiis.
                        Assumenda, ea sunt quis natus sequi nesciunt.Soluta consequatur libero corporis iusto nam earum nemo alias
                        vel cumque, distinctio magni minus, quas dolor non porro ipsam
                        saepe. Voluptates, iusto?
                    </p>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default About;