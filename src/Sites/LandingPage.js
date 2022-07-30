import styles from "../Styles/LandingPage.module.css"
import Button from "../Components/Button"

const LandingPage = () => {
    return <div className={styles.main}>
        <p>BadClup</p>
        <p>Creating better future for you!</p>
        <p>BadClup, for all time, always.</p>
        <Button buttonText="Learn more" />
    </div>
}

export default LandingPage;