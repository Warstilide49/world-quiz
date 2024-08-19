import styles from "../styles/celebration.module.css";
import JSConfetti from "js-confetti";
import { useEffect, useRef } from "react";

const CONFETTI_CONFIG = {
  confettiColors: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff', '#a864fd', '#29cdff', '#78ff44', '#ff718d'],
  confettiRadius: 7,
  confettiNumber: 300,
}

const CelebrationModal = ({ setModal }) => {
  const jsConfettiRef = useRef();

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti()

    const timeoutId = setTimeout(() => {
      if (jsConfettiRef.current) {
        jsConfettiRef.current.addConfetti(CONFETTI_CONFIG).then(() => console.log("Initial batch completed"))
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      className="full-modal-bg flex"
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={styles.celebration_modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>Congrats you have cleared the level!</h3>
        <h1 className={styles.party_emoji}>🥳</h1>
      </div>
    </div>
  );
};

export default CelebrationModal;
