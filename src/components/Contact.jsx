const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full min-h-screen p-10 bg-offwhite text-primary"
    >
      <div className="flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-accent">
            Contact
          </p>
          <p className="py-6 text-2xl">
            Got an opportunity in mind? Get in touch
          </p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/a96638c6-e657-41ce-971b-2b672466465d"
            className="grid w-full px-8 pt-6 pb-8 mb-4 rounded shadow-md border-primary md:w-1/2 text-primary"
            method="POST"
          >
            <label
              className="block mb-3 text-xl font-semibold"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 mb-4 text-lg leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline text-primary"
            />
            <label
              className="block mb-3 text-xl font-semibold"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 mb-4 text-lg leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline text-primary"
            />
            <label
              className="block mb-3 text-xl font-semibold"
              htmlFor="lastname"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 mb-4 text-lg leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline text-primary"
            />
            <label
              className="block mb-3 text-xl font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="p-2 text-lg border-2 rounded-md text-primary focus:outline-none"
            ></textarea>
            <button className="flex items-center justify-center w-full px-6 py-3 my-2 text-xl font-semibold text-white transition-all duration-700 rounded-md cursor-pointer hover:bg-info bg-primary ">
              Lets Chat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
