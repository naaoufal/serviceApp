import "./index.css";

const DATA = [
    {id: 1, name: "Surfing", img: "assets/images/surfing.jpg", desc: "Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse"},
    {id: 2, name: "Wind Surfing", img: "assets/images/wind-surfing.jpg",  desc: "Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse"},
    {id: 3, name: "Kite Surfing", img: "assets/images/kite-surfing.jpg",  desc: "Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse Nisi sunt duis duis ad do reprehenderit esse"},
]

const OfferScreen = () => {
    return (
        <div className="offer-container">
            {/* header */}
            <p style={{
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: 32,
            }} className="Header-offer">What we offer</p>
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
                // backgroundColor: "red",
                marginTop: 60,
                // flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {DATA && DATA?.map((item) => (
                    <div style={{
                        width: "33.3%",
                        display: "flex",
                        flexDirection: "column",
                        margin: 10,
                    }}>
                        <img style={{
                            width: "auto",
                            height: 220,
                            borderRadius: 6,
                        }} src={item?.img} />
                        <p style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            fontFamily: "monospace",
                            color: "#0C356A",
                            marginTop: 10,
                        }}>
                            {item?.name}
                        </p>
                        <p style={{
                            overflow: "hidden",
                            width: "80%",
                            textOverflow: "ellipsis",
                            fontSize: 14,
                            color: "gray",
                            fontFamily: "monospace",
                        }}>
                            {item?.desc}
                        </p>
                        <div>
                            <span style={{
                                color: "#0C356A",
                                fontSize: 14,
                                fontWeight: "bold",
                                fontFamily: "monospace",
                            }}>
                                Read more
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OfferScreen;