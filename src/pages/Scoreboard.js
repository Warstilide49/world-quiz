import { database } from "../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../styles/scoreboard.module.css";

const Scoreboard = ({ setIsLoading }) => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const collectionRef = collection(database, "leaderboard");
        getDocs(collectionRef).then((response) => {
            setLeaderboard(
                response.docs.map((item) => {
                    return item.data();
                }),
            );
            setIsLoading(false);
        });
    }, []);

    useEffect(()=> {
        console.log(leaderboard);
    }, [leaderboard])

    return (
    <div className="flex flex-1">
        <section className={styles.tableContainer}>
            <h1 className={styles.leaderboardText}>LeaderBoard</h1>
            <div className={styles.scores}>
                {leaderboard.map((score)=> 
                (<div className={styles.singleScore}>
                    <h1>{score.name}</h1>
                    <h3>{score.time}</h3>
                </div>)

                )}
            </div>
        </section>
    </div>
    )
}

export default Scoreboard;