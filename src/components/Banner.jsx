import BannerImg from '/banner.png'
// import iconImg from '/icon.png'
const Banner = () => {
    return (
        <div className="grid grid-cols-2 items-center mt-12 gap-12 px-36">
            {/* left */}
            <div className='space-y-5'>
                <p className="text-sm rounded-full w-1/2 bg-[#E1E7FF] text-[#4F39F6] px-3 py-1">   New: AI-Powered Tools Available</p>
                <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                <p className="text-[#627382] text-sm pt-2">Access premium AI tools, design assets, templates, and productivity <br />
                   software—all in one place. Start creating faster <br />

                   Explore Products
                </p>
                <div>
                    <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#4F39F6] text-white  rounded-[20px]">Explore Products</button>
                    <button className="btn  rounded-[20px] text-[#4F39F6]">Watch Demo</button>
                </div>
            </div>

            {/* right */}
            <div className='pt-6'>
                <div>
                    <img className='max-h-[500px] w-full' src={BannerImg} alt="banner.png" />
                </div>
            </div>
        </div>

        
    );
};

export default Banner;