import styles from "../Styles/About.module.css"
import { Fragment } from "react";
import MiniProfileList from "../Layout/MiniProfileList";

const About = () => {
    return (
      <Fragment>
        <div className={styles.description}>
          <h2>About BadClup:</h2>
          <p>
            BadClup was originally created by Bartłomiej Strama, and he engaged
            some of his friends to the project. Quickly he started doing well
            with Tomasz Mamala, so he also obtained rank of CEO. After making
            few projects together, they got to mind, they can do somethin on big
            scale and that's how BadClup started going. Currently we are working
            on the own DNS system, which can be very succesful project.
          </p>
          <p>
            At the start, all the projects, which has appeared all over the time
            (trust me there is many of them),
            we only in our minds, we knew we need to work very hard to achieve
            our dreams. We are putting all of our engagement in this project,
            because we want to make better world one day, with some of our
            inventions.
          </p>
          <p>Written by Tomasz Mamala, CEO</p>
          <p>
            don't judge me I am writing this is midnight even though I am not
            very good at it :D
          </p>
        </div>
        <MiniProfileList />
      </Fragment>
    );
}

export default About;