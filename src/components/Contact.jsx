const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full p-10 mx-auto min-h-80 bg-offwhite dark:bg-primary dark:text-offgray dark:border-t-2 dark:border-info text-primary"
    >
      <div className="max-w-screen-xl p-4 mx-auto ">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-accent">
            Contact
          </p>
          <p className="py-6 text-2xl">
            Got an opportunity in mind? Get in touch
          </p>
        </div>

        <div className="p-4 mt-4 border-2 rounded-lg dark:border-info w-100 md:w-2/3">
          <form
            action="https://getform.io/f/a96638c6-e657-41ce-971b-2b672466465d"
            className="border-primary text-primary dark:text-offgray"
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
              className="block w-full px-4 py-2 my-2 text-xl font-semibold border-2 rounded-lg shadow appearance-none focus:border-accent focus:outline-none focus:shadow-outline dark:text-offgray text-primary dark:bg-primary dark:border-info "
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
              className="block w-full px-4 py-2 my-2 text-xl font-semibold border-2 rounded-lg shadow appearance-none focus:border-accent focus:outline-none focus:shadow-outline dark:text-offgray text-primary dark:bg-primary dark:border-info "
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
              className="block w-full px-4 py-2 my-2 text-xl font-semibold border-2 rounded-lg shadow appearance-none focus:border-accent focus:outline-none focus:shadow-outline dark:text-offgray text-primary dark:bg-primary dark:border-info "
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
              className="block w-full px-4 py-2 my-2 text-xl font-semibold border-2 rounded-lg shadow appearance-none focus:border-accent focus:outline-none focus:shadow-outline dark:text-offgray text-primary dark:bg-primary dark:border-info "
            ></textarea>
            <button className="flex items-center justify-center w-full px-6 py-3 my-2 text-xl font-semibold text-white transition-all duration-700 rounded-md cursor-pointer dark:bg-accent hover:bg-info bg-primary ">
              Lets Chat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
