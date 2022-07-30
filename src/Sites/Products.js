import styles from "../Styles/Products.module.css"
import Button from "../Components/Button";

const Products = () => {
    return (
      <div className={styles.main}>
        <h2>BadClup DNS</h2>
        <p>BadClup's own DNS system! Could you believe?</p>
        <Button
          buttonText="Learn more"
          style={{ boxShadow: "0px 0px 25px #00000030" }}
        />
      </div>
    );
}

export default Products;