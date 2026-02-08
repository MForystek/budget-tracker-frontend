import useHealthCheck from "../hooks/useHealthCheck.ts";

export default function Footer() {
    const { isHealthy, lastChecked } = useHealthCheck(10);

    const getStatusDisplay = () => {
        if (isHealthy === null) {
            return {
                color: "gray",
                text: "Checking...",
            };
        }
        if (isHealthy) {
            return {
                color: "green",
                text: "UP",
            };
        }
        return {
            color: "red",
            text: "DOWN",
        };
    };

    const status = getStatusDisplay();

    return (
        <footer style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            backgroundColor: "#242424",
            borderTop: "1px solid #ccc",
            textAlign: "center",
        }}>
            <span style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: status.color,
                marginRight: "8px"
            }}></span>
            Server status: {status.text}
            {lastChecked && (
                <span style={{ marginLeft: "10px", fontSize: "0.8em", color: "#666" }}>
                    (Last checked: {lastChecked.toLocaleTimeString()})
                </span>
            )}
        </footer>
    );
}