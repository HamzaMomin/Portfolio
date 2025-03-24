const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen px-6 lg:px-12 py-6">
      {/* Left Side - Title & Box */}
      <div className="flex flex-col space-y-6 text-center lg:text-left w-full lg:w-auto self-start">
        <h1 id="hackerText" className="text-4xl font-bold mt-[80px]">Let’s Connect!</h1>
        <div className="w-40 h-40 mx-auto lg:mx-0 bg-gray-300 border border-black"></div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col space-y-6 w-full lg:w-auto mt-8 lg:mt-40 lg:ml-16">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full lg:w-48 h-12 px-4 bg-gray-300 text-gray-700 font-semibold rounded-full shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full lg:w-48 h-12 px-4 bg-gray-300 text-gray-700 font-semibold rounded-full shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
          />
        </div>

        <textarea
          placeholder="Your Message"
          className="w-full lg:w-96 h-32 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-2xl shadow-[4px_4px_0px_#000] border border-black focus:outline-none"
        ></textarea>

        <button className="w-full lg:w-40 h-12 bg-yellow-400 text-black font-semibold rounded-full shadow-[4px_4px_0px_#000] border border-black flex items-center justify-center space-x-2 hover:bg-yellow-500 transition">
          <span>Let’s Go</span>
          🚀
        </button>
      </div>
    </div>
  );
};

export default Contact;
