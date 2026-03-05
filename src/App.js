import { useState, useRef } from "react";

function App() {
  const boxRef = useRef(null);
  const noButtonRef = useRef(null);

  const [noPosition, setNoPosition] = useState(null);
  const [message, setMessage] = useState("");

  const moveNoButton = () => {
    const box = boxRef.current;
    const button = noButtonRef.current;

    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxLeft = boxWidth - buttonWidth;
    const maxTop = boxHeight - buttonHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    setNoPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  const handleYesClick = () => {
    setMessage("Bro, don’t be selfish… find one for me too.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box} ref={boxRef}>
        <h1 style={styles.title}>Do you have a girlfriend? ❤️</h1>

        {/* Button Row */}
        <div style={styles.buttonRow}>
          <button style={styles.yesButton} onClick={handleYesClick}>
            Yes
          </button>

          <button
            ref={noButtonRef}
            style={{
              ...styles.noButton,
              ...(noPosition && {
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
              }),
            }}
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </div>

        <h2 style={styles.message}>{message}</h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

  box: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    position: "relative",
    width: "600px",
    height: "500px",
    overflow: "hidden",
  },

  title: {
    marginBottom: "30px",
    color: "#333",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "120px",
  },

  yesButton: {
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },

  noButton: {
    padding: "12px 30px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f44336",
    color: "white",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  message: {
    marginTop: "40px",
    color: "#764ba2",
  },
};

export default App;
