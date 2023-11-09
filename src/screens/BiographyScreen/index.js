const BiographyScreen = () => {
    return (
        <div className="offer-container">
            {/* header */}
            <p style={{
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: 32,
            }} className="Header-offer">Biography</p>
            <div style={{
                marginBottom: 10,
            }}>
                <p style={{
                    color: "gray",
                    fontSize: 14,
                    fontFamily: "monospace",
                }}>Velit ut ut deserunt do in sunt reprehenderit minim minim qui tempor duis proident.</p>
            </div>
            {/* divider : */}
            <div style={{
                backgroundColor: "#39A7FF",
                height: 2,
                width: 240,
            }}></div>
            {/* cards */}
            <div style={{
                width: "70%",
                display: "flex",
                marginTop: 60,
                flexDirection: "column",
            }}>
                {/* first card */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <div style={{
                        // width: "50%",
                    }}>
                        <img style={{
                            width: "100%",
                            height: 400,
                            borderRadius: 6,
                        }} src="assets/images/biography-1.jpg" />
                    </div>
                    <div style={{
                        backgroundColor: "#98E4FF",
                        position: "absolute",
                        left: "50%",
                        width: "40%",
                        padding: 12,
                        borderRadius: 6,
                        marginTop: 20,
                        opacity: 0.9,
                    }}>
                        <p>Why Surf</p>
                        <p style={{
                            fontFamily: "monospace",
                            fontSize: 14,
                            color: "#363062"
                        }}>
                        Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse
                        Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographyScreen;