function Home() {
    return (
        <section className="home hero" id="home">
            <div className="hero-copy">
                <p className="hero-tag">Hi, I’m Edwin Khayombe</p>
                <h1>Building polished web experiences with React.</h1>
                <p className="hero-description">
                    I design and develop responsive, accessible, and modern web applications using HTML, CSS, JavaScript, and React.
                </p>
                <div className="hero-actions">
                    <a className="button" href="https://landing-page-rho-beige-19.vercel.app/" target="_blank" rel="noopener noreferrer">
                        View My Work
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src="/profile.jpg" alt="Edwin Khayombe profile" />
            </div>
        </section>
    );
}

export default Home;