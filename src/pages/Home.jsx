import AllTools from "../components/AllTools";
import Banner from "../components/Banner";
import BannerP from "../components/BannerP";
import Navber from "../components/Navber";
import { useState } from "react";
import Staps from "../components/Staps";
import Pricing from "../components/Pricing";


const Home = () => {
    const [carts, setCarts] = useState([]);
    return (
        <div>
            <Navber carts={carts}/>
            <div >
                <Banner/>
                <BannerP/>
                <AllTools setCarts={setCarts} carts={carts}/>
                <Staps/>
                <Pricing/>
            </div>
             
        </div>
    );
};

export default Home;