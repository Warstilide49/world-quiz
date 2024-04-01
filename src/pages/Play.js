import Map from "../assets/WorldMap";
import ReactCountryFlag from "react-country-flag";
import countryNames from "../assets/countryNames.json";
import { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";

const Play = ({ flagsToFind }) => {
    const [username, setUsername] = useState("");
    const [level, setLevel] = useState("Easy");
    const [showUserModal, setShowUserModal] = useState(null);

    useEffect(() => {
        setShowUserModal(true);
    }, []);

    return (
        <div className="flex" id="play">
            {showUserModal && (
                <UserInfo
                    setVisibility={setShowUserModal}
                    username={username}
                    setUsername={setUsername}
                />
            )}
            <Map width="85vw" height="85vh" />
            <div className="flag-holder">
                {flagsToFind.map((element) => (
                    <ReactCountryFlag
                        className="emojiFlag"
                        countryCode={element}
                        style={{
                            fontSize: "2em",
                            lineHeight: "2em",
                        }}
                        aria-label={countryNames[element]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Play;
