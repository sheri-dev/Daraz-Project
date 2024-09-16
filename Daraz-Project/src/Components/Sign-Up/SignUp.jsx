import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 sign-up">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Create your Daraz Account
        </h3>
        <div className="text-center mb-6">
          <span className="text-gray-500">
            Already member?{" "}
            <span className="text-blue-500 font-semibold">Login</span> here.
          </span>
        </div>
        <form>
          <div className="space-y-4">
            {/* Phone Number */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            {/* SMS Verification Code */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                SMS Verification Code
              </label>
              <input
                type="number"
                placeholder="6 digits"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              />
              <button
                type="button"
                className="mt-2 w-full py-2 px-4 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed"
                disabled
              >
                SEND
              </button>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 6 characters with a number and a letter"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            {/* Birthday */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                Birthday
              </label>
              <div className="flex space-x-2 mt-1">
                <select className="w-1/3 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none">
                  <option>Month</option>
                </select>
                <select className="w-1/3 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none">
                  <option>Day</option>
                </select>
                <select className="w-1/3 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none">
                  <option>Year</option>
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">Gender</label>
              <select className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 outline-none">
                <option>Select</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="relative">
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="First Last"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            {/* Receive Offers */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="enableSmsNewsletter"
                className="mr-2"
              />
              <label htmlFor="enableSmsNewsletter" className="text-gray-700">
                I'd like to receive exclusive offers and promotions via SMS
              </label>
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                SIGN UP
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mt-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-4 text-gray-500">Or, sign up with</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          {/* Social Signup Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button className="flex items-center justify-center px-4 py-2 border rounded-md w-full hover:bg-gray-100">
              <svg
                viewBox="0 0 48 48"
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.3846 24.143C47.3846 11.1491 36.915 0.615479 24 0.615479C11.085 0.615479 0.615387 11.1491 0.615387 24.143C0.615387 35.8861 9.16676 45.6197 20.3462 47.3847V30.9439H14.4087V24.143H20.3462V18.9596C20.3462 13.063 23.8374 9.80592 29.1789 9.80592C31.7375 9.80592 34.4135 10.2654 34.4135 10.2654V16.0554H31.4648C28.56 16.0554 27.6538 17.8692 27.6538 19.7298V24.143H34.1394L33.1026 30.9439H27.6538V47.3847C38.8332 45.6197 47.3846 35.8865 47.3846 24.143Z"
                  fill="#1877F2"
                ></path>
              </svg>
              Facebook
            </button>
            <button className="flex items-center justify-center px-4 py-2 border rounded-md w-full hover:bg-gray-100">
              <svg
                viewBox="0 0 48 48"
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4615 24.2121C42.4615 22.9399 42.3383 21.6267 42.1332 20.3955H24.3635V27.6593H34.541C34.1306 29.9985 32.7764 32.0504 30.7655 33.3637L36.8392 38.0831C40.4095 34.759 42.4615 29.9164 42.4615 24.2121Z"
                  fill="#4280EF"
                ></path>
                <path
                  d="M24.3654 42.5966C29.4541 42.5966 33.7221 40.914 36.8411 38.0413L30.7674 33.3629C29.0848 34.512 26.9097 35.1686 24.3654 35.1686C19.4407 35.1686 15.2959 31.8445 13.7774 27.4124L7.53959 32.2139C10.7406 38.5748 17.2247 42.5966 24.3654 42.5966Z"
                  fill="#34A353"
                ></path>
                <path
                  d="M13.777 27.3712C12.9972 25.032 12.9972 22.4876 13.777 20.1484L7.53913 15.3059C4.87163 20.6409 4.87163 26.9198 7.53913 32.2138L13.777 27.3712Z"
                  fill="#F6B704"
                ></path>
                <path
                  d="M24.3654 12.3928C27.0329 12.3518 29.6593 13.3777 31.5881 15.2245L36.9642 9.80739C33.558 6.60639 29.0437 4.88277 24.3654 4.92381C17.2247 4.92381 10.7406 8.94558 7.53959 15.3065L13.7774 20.1491C15.2959 15.6759 19.4407 12.3928 24.3654 12.3928Z"
                  fill="#EA4435"
                ></path>
              </svg>
              Google
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>
              By clicking "SIGN UP" I agree to the{" "}
              <span className="text-blue-500">Terms of Use</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
