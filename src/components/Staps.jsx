import { User, Box, Rocket } from "lucide-react";
const Staps = () => {
    return (
    <div className="bg-gray-100 py-16 px-4">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        {/* Step 1 */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <User className="text-purple-600" />
          </div>

          <h3 className="font-semibold text-lg">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <Box className="text-purple-600" />
          </div>

          <h3 className="font-semibold text-lg">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <Rocket className="text-purple-600" />
          </div>

          <h3 className="font-semibold text-lg">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
    );
};

export default Staps;