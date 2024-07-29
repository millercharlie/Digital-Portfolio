import NavBar from "../components/NavBar.jsx";

/**
 * Represents a contact page. This page has a form users can fill out to email me. In addition, contact information is
 *   also present.
 * @returns {JSX.Element} Contact page.
 */
export default function Contact() {

  /**
   * Sends an email with the various parameters automatically filled in.
   */
  const handleSubmit = () => {
    const subject = document.querySelector('#subject').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    window.location.href = `mailto:onecharliemiller@gmail.com?subject=${subject}&email=${email}&body=${message}`;

    const submitButton = document.getElementById("submit-button");
    submitButton.innerHTML = 'Submitted!'
    submitButton.style.backgroundColor = "#F2873B";
  };

  return (
    <div className="website-background">
      <div>
        <NavBar background="#FFFFFF" fun={() => {}} />
      </div>
      <div className="contact-content">
        <div className="left">
          <h1 className="contact-title">
            <strong>Contact Me</strong>
          </h1>
          <p className="contact-description">
            Like what you see or want to get in touch? There are various ways
            you can contact me. The form to your right will send me a direct
            email address with your name and message! Alternative means of
            communication are below.
          </p>
          <div className="socials-container">
            <a
              href="https://www.linkedin.com/in/onecharliemiller/"
              className="social-group"
            >
              <img
                src="src/assets/social_icons/linkedin-icon.svg"
                className="social-icon"
                alt="linkedin-icon"
              />
              <p>/onecharliemiller</p>
            </a>
            <a
              href="mailto:onecharliemiller@gmail.com"
              className="social-group"
            >
              <img
                src="src/assets/social_icons/envelope.svg"
                className="social-icon"
                alt="envelope-icon"
              />
              <p>onecharliemiller@gmail.com</p>
            </a>
            <a href="https://github.com/millercharlie" className="social-group">
              <img
                src="src/assets/social_icons/github-icon.svg"
                className="social-icon"
                alt="github-icon"
              />
              <p>/millercharlie</p>
            </a>
            <a
              href="https://www.behance.net/onecharliemiller"
              className="social-group"
            >
              <img
                src="src/assets/social_icons/behance-icon.svg"
                className="social-icon"
                alt="behance-icon"
              />
              <p>/onecharliemiller</p>
            </a>
          </div>
        </div>
        <div className="right">
          <form encType="text/plain">
            <label htmlFor="subject" className="contact-label">
              Subject
            </label>
            <br />
            <input type="text" id="subject" name="subject" className="text-input" />
            <br />
            <label htmlFor="email" className="contact-label">
              Email Address
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="text-input"
            />
            <br />
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <br />
            <textarea id="message" name="message" className="message-input" />
            <br />
            <br />
            {/*<input type="submit" value="Submit" className="contact-btn" />*/}
          </form>
          <button onClick={handleSubmit} id="submit-button" className="contact-btn">Submit</button>
        </div>
      </div>
      <div className="footer">
        <footer className="row">
          <p>
            Created with &#128156; using HTML
            <img
              src="src/assets/tool_icons/html.svg"
              alt="html-icon"
              className="tool-icon"
            />
            , CSS
            <img
              src="src/assets/tool_icons/css.svg"
              alt="css-icon"
              className="tool-icon"
            />
            , and{" "}
            <img
              src="src/assets/tool_icons/javascript.svg"
              alt="javascript-icon"
              className="tool-icon"
            />{" "}
            with React{" "}
            <img
              src="src/assets/tool_icons/react.svg"
              alt="react-icon"
              className="tool-icon"
            />
          </p>
        </footer>
      </div>
    </div>
  );
}
