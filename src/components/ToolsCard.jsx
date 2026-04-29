import { use } from "react";
import toast from "react-hot-toast";
   

const toolsPromise = fetch('./Tools.json')
.then(res => res.json());



const ToolsCard = ({carts, setCarts}) => {
    const tools = use(toolsPromise)
    console.log(tools);


const addToCart = (tool)=>{
    const isExist = carts.find(c=> c.id === tool.id);
    if(isExist){
        toast.error('This item is already in the cart');
        return;
    }
    setCarts((prevCarts) => [...prevCarts,tool]);
    toast.success('Item added to cart');
    
}

    return (
        <div className="grid  grid-cols-1  sm:grid-cols-2  justify-items-center lg:grid-cols-2 xl:grid-cols-3 justify-center gap-6 pt-4">
            {
                tools.map(tool => (
                    <div key={tool.id}
                     className="card w-96 bg-base-100 card-xl shadow-sm">
                        <div className="card-body">
                           <h2 className="card-title text-2xl font-bold">{tool.name}</h2>
                            <p className="text-sm text-[#627382]" >{tool.description}</p>
                            <p className="text-2xl font-bold">${tool.price.toFixed(2)}</p>
                            <p className="text-sm text-[#627382]">{tool.period}</p>
                            <p className=" absolute top-8 left-75 text-sm bg-amber-200 rounded-full w-20 h-8 flex items-center justify-center">{tool.tagType}</p>
                            <p className="text-sm text-[#627382]"> {tool.features}</p>
                            <p className="text-sm text-[#627382]">{tool.icon}</p>
                            <p className="text-sm text-[#627382]">{tool.category}</p>
                            <p className="text-sm text-[#627382]">{tool?.rating}</p>
                            <p className="text-sm text-[#627382]">{tool.reviews} reviews</p>
                            <div className="justify-end card-actions">
                            <button onClick={() => addToCart(tool)} className="btn btn-primary w-[332px] h-[50px] ru">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToolsCard;