function Contact() {
    return ( 
        <section className="contact" id="contact">
            <h1>Contact Me</h1>
            <p>If you would like to get in touch with me, please fill out the form below and I will get back to you as soon as possible.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
     );
}

export default Contact;