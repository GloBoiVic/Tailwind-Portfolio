const Contact = () => {
  return (
    <section className="dark:border-t-2 dark:border-info" name="contact">
      <div className="container px-10 py-20 md:px-20">
        <p className="inline text-2xl font-bold border-b-4 sm:text-4xl border-accent">Contact</p>
        <div className="max-w-xl p-5 mt-8 overflow-hidden border rounded shadow-md shadow-info dark:border-info">
          <div className="space-y-2">
            <h3 className="text-lg font-bold sm:text-xl">Get in touch</h3>
            <p>Looking for a developer? Let's work together</p>
            <p>
              Email me at{' '}
              <span className="font-bold">
                <a href="mailto:victorike08@gmail.com">victorike08@gmail.com</a>
              </span>
            </p>
            <p>
              Message me on{' '}
              <a
                className="cursor-pointer hover:underline"
                href="https://www.linkedin.com/in/developing-vic/"
              >
                LinkedIn
              </a>{' '}
              or checkout my{' '}
              <a className="cursor-pointer hover:underline" href="https://github.com/GloBoiVic">
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
