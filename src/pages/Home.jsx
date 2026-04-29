import AllTools from "../components/AllTools";
import Banner from "../components/Banner";
import BannerP from "../components/BannerP";
import Navber from "../components/Navber";
import { useState } from "react";


const Home = () => {
    const [carts, setCarts] = useState([]);
    return (
        <div>
            <Navber carts={carts}/>
            <div >
                <Banner/>
                <BannerP/>
                <AllTools setCarts={setCarts} carts={carts}/>
            </div>
             
        </div>
    );
};

export default Home;