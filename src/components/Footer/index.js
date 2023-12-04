const Footer = () => {
    return (
        <div style={{
            backgroundColor: "#0C356A",
            padding: 20,
            // marginTop: 10,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                // padding: 10,
                // textAlign: "center",
                justifyContent: "space-around",
                alignItems: "flex-start",
                // width: "90%",
            }}>
                <p style={{
                    // textAlign: "center",
                    color: "#fff",
                    letterSpacing: 3,
                    fontWeight: "bold",
                    // marginTop: 20,
                    // marginBottom: 20,
                    fontSize: 40,
                }}>SURFING</p>
                {/* divider : */}
                {/* <div style={{
                    backgroundColor: "#fff",
                    height: 2,
                    width: 240,
                }}></div> */}
                {/* links */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    // margin: 10,
                    // padding: 10,
                }}>
                    <span style={{
                        color: "#fff",
                    }}>Biography</span>
                    <span style={{
                        color: "#fff",
                    }}>Offers</span>
                    <span style={{
                        color: "#fff",
                    }}>Contact Us</span>
                    <span style={{
                        color: "#fff",
                    }}>About Us</span>
                </div>
                {/* newslatter */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <span style={{
                        color: "#fff",
                    }}>Newslatter</span>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        marginBottom: 10,
                    }}>
                        <input placeholder="Email" />
                        <button>newslatter</button>
                    </div>
                </div>
            </div>
            {/* social network */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifyItems: "center",
                textAlign: "center",
            }}>
                {/* divider : */}
                <div style={{
                    backgroundColor: "#fff",
                    height: 2,
                    width: 240,
                }}></div>
                <p>social network</p>
            </div>
        </div>
    );
};

export default Footer;