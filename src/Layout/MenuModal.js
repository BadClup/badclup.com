import { Fragment } from "react";
import styles from "../Styles/MenuModal.module.css"
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.closeModal}/>;
}

const Modal = () => {
    return (
      <div className={styles.container}>
        <div
          className={styles.card}
          onClick={() => {
            window.location = "/";
          }}
        >
          Home
        </div>
        <div
          className={styles.card}
          onClick={() => {
            window.location = "/about";
          }}
        >
          About
        </div>
        <div
          className={styles.card}
          onClick={() => {
            window.location = "/products";
          }}
        >
          Products
        </div>
        <div
          className={styles.card}
          onClick={() => {
            window.location = "/contact";
          }}
        >
          Contact
        </div>
      </div>
    );
}

const MenuModal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>, document.getElementById("Backdrop"))}
        {ReactDOM.createPortal(<Modal />, document.getElementById("Modal"))}
      </Fragment>
    );
}

export default MenuModal;