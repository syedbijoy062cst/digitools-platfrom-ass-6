

const RadyToTransfrom = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-700 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h1>

        {/* Subheading */}
        <p className="text-purple-100 text-lg md:text-xl mb-10 max-w-md mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-700 hover:bg-purple-50 transition-colors font-semibold px-8 py-3.5 rounded-full text-lg">
            Explore Products
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white/10 transition-colors font-semibold px-8 py-3.5 rounded-full text-lg">
            View Pricing
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-10 text-purple-200 text-sm flex items-center justify-center gap-6">
          <span>14-day free trial</span>
          <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
          <span>No credit card required</span>
          <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
    );
};

export default RadyToTransfrom;