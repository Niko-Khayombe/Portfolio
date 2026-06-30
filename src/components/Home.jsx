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
                <div className="social-media">
                    <a href="https://github.com/Niko-Khayombe" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/edwin-khayombe-1589b4394?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100092215243905" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/niko_edu24?igsh=MWNvcDJtdjhjZTQxMw==" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://x.com/Niko_Edu24" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.png" alt="Twitter" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;