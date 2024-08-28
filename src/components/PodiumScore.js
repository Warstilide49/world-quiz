import first from '../assets/icons/first.png';
import second from '../assets/icons/second.png';
import third from '../assets/icons/third.png';
import styles from '../styles/podium.module.css'

const PodiumScore = ({staticProperties, name, rank, score}) => {
    const {length, color } = staticProperties;
    const rankImages = {
        1: first, 
        2: second, 
        3: third
    }

    return (
        <div className={`${styles.podium} flex flex-column`} style={{height: length, backgroundColor: color}}>
            <h3>{name}</h3>
            <img src={rankImages[rank]} alt={rank} className={styles.rankImage}/>
            <h5>{score}</h5>
        </div>
    )
}

export default PodiumScore