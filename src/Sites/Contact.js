import styles from "../Styles/Contact.module.css"
import Button from "../Components/Button";

const Contact = () => {
    return (
      <div className={styles.main}>
        <form>
          <h2>Contact BadClup</h2>
          <input type="text" id="name" placeholder="Name and surname" />
          <input type="email" id="email" placeholder="E-mail" />
          <textarea
            name="message"
            id="message"
            placeholder="Your message here"
          />
            <Button buttonText="Submit" style={{ border: "none" }} />
        </form>
        <p>WARNING !!! Still in building.</p>
        <p>The form may not work properly, and we cannot guarantee you any privacy. But if you still wanna use it just type in web console: "x = y"</p>
      </div>
    );
}

export default Contact;