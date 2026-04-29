

const Carts = ({ setCarts,carts}) => {
    const total = carts.reduce((sum, cart) => sum + cart.price, 0);
    console.log(total);
    const removeCartItem = (id) => {
        const filteredCarts = carts.filter(cart => cart.id !== id);
        setCarts(filteredCarts);
    }
    

    if(carts.length == 0){
        return <div className="text-center text-2xl mt-6 shadow font-bold">No Carts</div>
    }
    return (
        <div className="grid  justify-center gap-6 pt-4">
            <div className="flex text-2xl text-center justify-center items-center">
                <p>Your cart Item</p>
              </div>
            {
                carts.map(cart => (
                    <div 
                    key={cart.id} className=" flex justify-between shadow-md p-4">
                        <div className="card-body">
                            <h2 className="card-title">{cart.name}</h2>
                            <p>{cart.description}</p>
                            <p>${cart.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-end"> 
                            <button className="btn" onClick={()=> removeCartItem(cart.id)}>Remove</button>
                        </div>
                    </div>
                    
                ))
            }
            <hr />
            {/* Cart Summary */}
            <div className="flex justify-between">
                <h2 className="text-2xl">Your Total</h2>
                <h2 className="text-2xl">${total.toFixed(2)}</h2>
            </div>
        </div>

    );
};

export default Carts;