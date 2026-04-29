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
        <div className="grid grid-cols-3 justify-center gap-6 pt-4">
            {
                tools.map(tool => (
                    <div key={tool.id}
                     className="card w-96 bg-base-100 card-xl shadow-sm">
                        <div className="card-body">
                           <h2 className="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <p>${tool.price.toFixed(2)}</p>
                            <p>{tool.category}</p>
                            <p>{tool.rating}</p>
                            <p>{tool.reviews} reviews</p>
                            <div className="justify-end card-actions">
                            <button onClick={() => addToCart(tool)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToolsCard;