import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);
  const [otp, setOtp] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIs2FAModalOpen(true); // Open 2FA modal after login
  };

  const handle2FASubmit = () => {
    console.log("OTP Submitted:", otp);
    setIs2FAModalOpen(false); // Close modal after OTP submission
  };

  return (
    <div className="max-w-6xl mx-auto p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-lg rounded-xl overflow-hidden min-h-[550px]">
        
        {/* Image Section */}
        <div className="w-full h-full relative">
          <Image
            src="/login.png"
            alt="Hospital"
            width={600}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
          <h3 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center md:text-left w-full px-4 rounded-md">
            HOSPITAL MANAGEMENT SYSTEM
          </h3>
        </div>

        {/* Form Section */}
        <div className="card-body flex flex-col justify-center p-8 space-y-2">
          <h2 className="text-2xl font-bold text-center">Futurix</h2>
          <p className="text-gray-600 text-sm text-center">Welcome Back! Log in to the system</p>

          <form onSubmit={handleLogin} className="space-y-3">
            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-sm font-medium">Hospital Identification*</legend>
              <input 
                type="text" 
                className="input input-bordered w-full text-base p-2 rounded-lg" 
                placeholder="Enter your Hospital ID" 
                required 
              />
              <p className="text-sm text-gray-500">Enter Your Unique ID issued by Futurix</p>
            </fieldset>

            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-sm font-medium">Password*</legend>
              <input 
                type="password" 
                className="input input-bordered w-full text-base p-2 rounded-lg" 
                placeholder="Enter your password" 
                required 
              />
              <p className="text-sm text-gray-500">Password must be at least 8 characters</p>
            </fieldset>

            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-sm font-medium">Hospital Email*</legend>
              <input 
                type="email" 
                className="input input-bordered w-full text-base p-2 rounded-lg" 
                placeholder="Enter your email" 
                required 
              />
            </fieldset>

            <div className="text-center mb-4">
              <Link href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-success w-full py-2 text-lg text-white rounded-lg">Login</button>
          </form>
        </div>
      </div>

      {/* 2FA Modal */}
      {is2FAModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh]">
            <h2 className="text-xl font-semibold mb-3 text-center">Two-Factor Authentication</h2>
            <p className="text-sm text-gray-500 text-center mb-3">
              Enter the OTP code sent to your registered email or phone.
            </p>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input input-bordered w-full text-base p-2 text-center"
              placeholder="Enter OTP"
              maxLength={6}
              required
            />

            <div className="flex justify-between mt-4">
              <button onClick={() => setIs2FAModalOpen(false)} className="btn btn-outline w-1/2 mr-2">Cancel</button>
              <button onClick={handle2FASubmit} className="btn btn-success w-1/2">Verify</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
