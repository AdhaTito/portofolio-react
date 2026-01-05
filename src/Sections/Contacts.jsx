function Contacts() {
  return (
    <section id="contact" className="flex pb-32 pt-36 dark:bg-slate-900">
      <div className="container justify-center">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-mainColor">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Hubungi Saya
            </h2>
            <p className="text-sm font-medium text-secondary dark:text-white md:text-lg">
              Hubungi melalui email?{" "}
              <span className="text-mainColor/70">Isi Form dibawah ini</span>
            </p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/b1aa69c6a4792130a99fc4454d45d679"
          method="POST"
        >
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-mainColor "
              >
                Nama
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-slate-200 text-dark focus:border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-mainColor"
              >
                Email
              </label>
              <input
                required="email"
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-slate-200 text-dark focus:border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-mainColor"
              >
                Pesan
              </label>
              <textarea
                required
                type="textarea"
                id="message"
                name="message"
                className="w-full h-32 p-3 rounded-md bg-slate-200 text-dark focus:border-mainColor focus:outline-none focus:ring-1 focus:ring-mainColor"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                type="submit"
                className="w-full px-8 py-2 text-base font-semibold text-white transition duration-500 rounded-md bg-mainColor hover:opacity-80 hover:shadow-lg"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
