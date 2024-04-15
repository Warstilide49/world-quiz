import styles from "../styles/loadingscreen.module.css";

const LoadingScreen = ({ isLoading }) => {
  return (
    isLoading && (
      <section className={styles.backdrop}>
        <div className={styles.loader}></div>
      </section>
    )
  );
};

export default LoadingScreen;
