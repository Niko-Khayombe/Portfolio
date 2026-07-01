function Projects() {
    return ( 
        <section className="projects" id="projects">
            <h1>My Projects</h1>
            <div className="project-cards">
                <div className="project-card">
                    <h2>Project 1</h2>
                    <img src="/landing-page.png" alt="Landing Page" />
                    <p>Landing Page using HTML and CSS</p>
                    <a href="https://landing-page-rho-beige-19.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Project 2</h2>
                    <img src="/portfolioApp.png" alt="Portfolio" />
                    <p>Portfolio Website using React</p>
                    <a href="https://portfolio-t4mx-k4xyr9atc-niko-edus-projects.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Project 3</h2>
                    <img src="/ToDo.png" alt="Todo App" />
                    <p>Todo App using React and Local Storage</p>
                    <a href="https://to-do-list-rsux-motdzcvr5-niko-edus-projects.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h2>Project 4</h2>
                    <img src="/weather.png" alt="Weather App" />
                    <p>Weather App using React and OpenWeatherMap API</p>
                    <a href="https://weather-app-beta-snowy-24.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </section>
     );
}

export default Projects;