import { useState } from "react";

const Profile = ({ name, occupation, funFact }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const styles = {
    profileContainer: {
      border: "1px dotted black",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      textAlign: "center",
    },
    button: {
      marginTop: "10px",
      padding: "15px",
      cursor: "pointer",
      borderRadius: "50%",
    },
    detail: {
      margin: "10px",
      color: "gray",
      FontFace: "verdana",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.profileContainer}>
      <h1>{name}</h1>
      <h2>{occupation}</h2>
      <p>{funFact}</p>
      <button onClick={toggleDetail} style={styles.button}>
        {showDetail ? "Hide Detail" : "Show Detail"}
      </button>
      {showDetail && (
        <p style={styles.detail}>This is an extra detail about {name}.</p>
      )}
    </div>
  );
};

export default Profile;
