import {ReactComponent as BadClupLogo} from "../Images/BadClup.svg"
import styles from "../Styles/Header.module.css"
import { useLocation } from "react-router-dom";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MenuModal from "./MenuModal";

const Header = () => {
    const location = useLocation();

    const [buttonActive, setButtonActive] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);

    const menuActiveHandler = () => {
      setButtonActive(!buttonActive);
      setModalIsShown(!modalIsShown);
    }

    const closeModalHandler = () => {
      setButtonActive(false);
      setModalIsShown(false)
    }

    return (
      <Fragment>
        {modalIsShown && <MenuModal closeModal={closeModalHandler} />}
        <header
          className={styles.main}
          style={{
            justifyContent: (() => {
              if (location.pathname === "/" && window.innerWidth < 700) {
                return "flex-end";
              }
              return "space-around";
            })(),
          }}
        >
          {location.pathname !== "/" && (
            <BadClupLogo
              onClick={() => {
                window.location = "/";
              }}
            />
          )}
          <div className={styles.container}>
            <Link className={styles.card} to="/">
              Home
            </Link>
            <Link className={styles.card} to="/about">
              About
            </Link>
            <Link className={styles.card} to="/products">
              Products
            </Link>
            <Link className={styles.card} to="/contact">
              Contact
            </Link>
          </div>
          <div className={styles.menu} onClick={menuActiveHandler}>
            <div
              className={`${styles.line} ${buttonActive ? styles.active : ""}`}
            />
            <div
              className={`${styles.line} ${buttonActive ? styles.active : ""}`}
            />
            <div
              className={`${styles.line} ${buttonActive ? styles.active : ""}`}
            />
          </div>
        </header>
      </Fragment>
    );
}

export default Header;