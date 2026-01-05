function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=6282124509598"
            target="_blank"
            className="hover:underline"
          >
            Created By Adha Mastito 💕
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
