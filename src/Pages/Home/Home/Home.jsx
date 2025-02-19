import Banner from "../Banner/Banner";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <div className="bg-[#FFF8F5] lg:px-32 px-3">
                <Banner></Banner>
            </div>
            <div className="bg-white lg:px-32 px-3">
                <Services></Services>
            </div>
            <div className="bg-[#FFF8F5] lg:px-32 px-3">
                <HappyCustomer></HappyCustomer>
            </div>
        </div>
    );
};

export default Home;