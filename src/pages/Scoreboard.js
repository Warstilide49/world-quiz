import { database } from "../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../styles/scoreboard.module.css";
import PodiumScore from "../components/PodiumScore.js";

const Scoreboard = ({ setIsLoading }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [displayedScores, setDisplayedScores] = useState([]);
    const [topThree, setTopThree] = useState([]);

    const podiumProperties = [
        { length: "170px", color: "#e0e0e0" },
        { length: "250px", color: "#ffe083" },
        { length: "100px", color: "#fe9644" },
    ];

    useEffect(() => {
        setIsLoading(true);
        const collectionRef = collection(database, "leaderboard");
        getDocs(collectionRef).then((response) => {
            setLeaderboard(
                response.docs.map((item) => {
                    return item.data();
                })
            );
            setIsLoading(false);
        });
    }, []);


    // For Podium (not really sure if this was necessary) 
    useEffect(() => {
        const sortedLeaderboard = leaderboard.sort((a, b) => a.time - b.time);
        setDisplayedScores(sortedLeaderboard.slice(3, 7));

        // First 3 in the sorted order
        const unorderedThree = sortedLeaderboard
            .slice(0, 3)
            .map((score, index) => ({ ...score, rank: index + 1 }));
        
        // Swapping first and second as per design(podium)
        [unorderedThree[0], unorderedThree[1]] = [
            unorderedThree[1],
            unorderedThree[0],
        ];
        setTopThree(unorderedThree);
    }, [leaderboard]);

    return (
        <div className="flex flex-1">
            <section className={styles.tableContainer}>
                <h1 className={styles.leaderboardText}>Leaderboard</h1>
                <div className={`${styles.top_three} flex`}>
                    {podiumProperties.map((properties, index) => (
                        <PodiumScore
                            key={index}
                            rank={topThree[index]?.rank || ""}
                            name={topThree[index]?.name || ""}
                            score={topThree[index]?.time || ""}
                            staticProperties={properties}
                        ></PodiumScore>
                    ))}
                </div>
                <div className={styles.normal_scores}>
                    {displayedScores.map((score, index) => (
                        <div className={styles.singleScore} key={index}>
                            <h1>{score.name}</h1>
                            <h3>{score.time}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Scoreboard;
