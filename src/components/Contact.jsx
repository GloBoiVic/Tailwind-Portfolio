const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Got an opportunity in mind? Get in touch</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a96638c6-e657-41ce-971b-2b672466465d"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
