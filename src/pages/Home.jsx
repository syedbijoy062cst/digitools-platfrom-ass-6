import AllTools from "../components/AllTools";
import Banner from "../components/Banner";
import BannerP from "../components/BannerP";
import Navber from "../components/Navber";
import { useState } from "react";
import Staps from "../components/Staps";
import Pricing from "../components/Pricing";
import RadyToTransfrom from "../components/RadyToTransfrom";


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
                <RadyToTransfrom/>
            </div>
             
        </div>
    );
};

export default Home;