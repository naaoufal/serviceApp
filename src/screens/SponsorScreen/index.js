const Sponsors = [
    {id: 1, name: "sponsor-1", img: "assets/images/sponsor-4.png"},
    {id: 2, name: "sponsor-2", img: "assets/images/sponsor-4.png"},
    {id: 3, name: "sponsor-3", img: "assets/images/sponsor-4.png"},
    {id: 4, name: "sponsor-4", img: "assets/images/sponsor-4.png"},
];

const SponsorScreen = () => {
    return (
        <div className="offer-container">
            {/* header */}
            <p style={{
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: 32,
            }} className="Header-offer">Sponsors</p>
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
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 60,
            }}>
                {Sponsors && Sponsors?.map((item) => (
                    <div>
                        <img style={{
                            width: "100%",
                            height: 200,
                        }} src={item?.img} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SponsorScreen;