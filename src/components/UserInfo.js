import { useEffect } from "react";
import styles from "../styles/userinfo.module.css";

const UserInfo = ({ username, setUsername, setVisibility }) => {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
    }, []);

    const removeUserModal = () => {
        document.body.classList.remove("overflow-hidden");
        setVisibility(false);
    };

    return (
        <div className="full-modal-bg flex">
            <div className={styles.modal}>
                <p>Choose Game Settings</p>
                <input
                    placeholder="Enter your username"
                    onChange={(event) => setUsername(event.target.value)}
                ></input>
                <select>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <button
                    disabled={!username}
                    onClick={() => {
                        removeUserModal();
                    }}
                    className={styles.playButton}
                >
                    Play!
                </button>
            </div>
        </div>
    );
};

export default UserInfo;
