import ToolsCard from "./ToolsCard";
import Carts from "./Carts";
import { useState } from "react";


const AllTools = ({carts, setCarts}) => {
    const [activeTab, setActiveTab] = useState('tools');
    return (
        <div className=" mt-36 ">
            {/* Static content */}
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Premium Digital Tools</h2>
                <p className="text-sm text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="space-x-4">
                    <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#4F39F6] text-white " onClick={()=>setActiveTab('tools')}>Products</button>
                    <button className="btn rounded-full" onClick={() => setActiveTab('carts')}>Cart </button>
                </div>
            </div>
            {/* dynamic content */}
            <div>
               {/* <ToolsCard setCarts={setCarts} carts={carts} />
               <Carts carts={carts} /> */}
               {
                activeTab == 'tools' ?(<ToolsCard setCarts={setCarts} carts={carts} />) : (<Carts  setCarts={setCarts} carts ={carts} />)
               }
            </div>
        </div>
    );
};

export default AllTools;