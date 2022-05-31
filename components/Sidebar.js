import Link from "next/link";

export default function Sidebar() {
  return (<div className="fixed bg-white dark:bg-gray-800 shadow-lg">
    <div className="flex flex-col sm:flex-row sm:justify-around">
      <div className="w-72 h-screen">
        <div className="flex items-center justify-start mx-6 mt-10">
          <Link href="/dashboard" passHref>
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="w-8" src="/images/logogram.png" alt="logogram" />
              <div className="capitalize font-lato"><span className="font-extrabold text-sigap-ijo">freelance</span> <span className="font-bold">sigap</span></div>
            </div>
          </Link>
        </div>
        <nav className="mt-10 px-6 ">
          <Link href="/profil" passHref>
            <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="mx-4 text-lg font-normal">
                Profile
              </span>
              <span className="flex-grow text-right">
              </span>
            </a>
          </Link>
          <Link href="/profil/help" passHref>
            <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <span className="mx-4 text-lg font-normal">
                Help Center
              </span>
              <span className="flex-grow text-right">
              </span>
            </a>
          </Link>
          <Link href="/profil/faq" passHref>
            <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
              <i className="fa fa-question-circle-o" aria-hidden="true"></i>
              <span className="mx-4 text-lg font-normal">
                FAQ
              </span>
              <span className="flex-grow text-right">
              </span>
            </a>
          </Link>
        </nav>
        <div className="absolute bottom-0 my-10">
          <Link href="/" passHref>
            <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8" href="#">
              <i className="fa fa-power-off fa-lg" aria-hidden="true"></i>
              <span className="mx-4 font-medium">
                Logout
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>)
}