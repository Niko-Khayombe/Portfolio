function Skills() {
    return ( 
        <section className="skills" id="skills">
            <h1>My Skills</h1>
            <div className="skills-cards">
                <div className="skill-card skill-card--html">
                    <h2>HTML</h2>
                    <p>Proficient in creating semantic and accessible HTML structures.</p>
                </div>
                <div className="skill-card skill-card--css">
                    <h2>CSS</h2>
                    <p>Skilled in styling and layout using CSS and preprocessors like Sass.</p>
                </div>
                <div className="skill-card skill-card--javascript">
                    <h2>JavaScript</h2>
                    <p>Experienced in writing efficient and maintainable JavaScript code.</p>
                </div>
                <div className="skill-card skill-card--react">
                    <h2>React</h2>
                    <p>Proficient in building user interfaces with React and its ecosystem.</p>
                </div>
            </div>
        </section>
     );
}

export default Skills;