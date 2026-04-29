

const BannerP = () => {
    return (
        
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-10 mt-10  text-white">
      
      <div className="  flex items-center justify-between text-center">
        
        {/* Item 1 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-80 mt-1">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white opacity-30"></div>

        {/* Item 2 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-80 mt-1">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-white opacity-30"></div>

        {/* Item 3 */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-80 mt-1">Rating</p>
        </div>

      </div>
    </div>
       
    );
};

export default BannerP;