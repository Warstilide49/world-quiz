import styles from "../styles/confirmation.module.css";

const ConfirmationModal = ({ setModal, message, onRestart }) => {
  return (
    <div
      className="full-modal-bg flex"
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={styles.confirmation_modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>{message}</p>
        <div className={styles.buttons}>
          <button
            className="button button-secondary"
            onClick={() => {
              setModal(false);
            }}
          >
            No
          </button>
          <button className="button button-primary" onClick={onRestart}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
