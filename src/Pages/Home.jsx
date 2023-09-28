import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Phone from "../Components/Phone/Phone";

const Home = () => {
    const phones = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <div>
            <h2 className="text-center text-2xl mt-20">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;