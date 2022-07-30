import styles from "../Styles/Button.module.css"

const Button = props =>{
    return <button type={props.type || "button"} className={`${styles.button} ${props.className}`} onClick={props.onClick} rel={props.rel} style={props.style}>
        {props.children || props.buttonText}
    </button>
}

export default Button