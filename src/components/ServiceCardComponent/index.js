import CarImage from "../../assets/images/car-image.png";

const DATA = [
    {id: 1, name: "service 1"},
    {id: 2, name: "service 2"},
    {id: 3, name: "service 3"},
    {id: 4, name: "service 4"},
    {id: 5, name: "service 5"},
    {id: 6, name: "service 6"},
]

const ServiceCardComponent = () => {
    return (
        <div className="row" style={{
            // margin: 20,
            // padding: 20,
        }}>
            {DATA && DATA?.map((element) => (
                // <div className="row">
                <div className="col-sm-3">
                    <div class="card" style={{
                        margin: 20,
                    }}>
                        <img src={CarImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">
                                {element?.name}
                            </h5>
                        </div>
                    </div>
                </div>
            // </div>
            ))}
        </div>
    );
};

export default ServiceCardComponent;