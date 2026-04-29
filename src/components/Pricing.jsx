

const Pricing = () => {
    return (
         <div className="bg-gray-100 py-16 px-4">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Starter */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Starter</h3>
          <p className="text-gray-500 text-sm">Perfect for getting started</p>

          <h2 className="text-3xl font-bold mt-4">
            $0 <span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl p-6 shadow-lg scale-105">
          
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm opacity-80">Best for professionals</p>

          <h2 className="text-3xl font-bold mt-4">
            $29 <span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-medium">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-gray-500 text-sm">For teams and businesses</p>

          <h2 className="text-3xl font-bold mt-4">
            $99 <span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
    );
};

export default Pricing;