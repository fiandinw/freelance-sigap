import Sidebar from "../../components/Sidebar";

export default function Profil() {
  return (<>
    <Sidebar />
    <div className="ml-72 p-8 flex flex-col gap-8">

      <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
          profil
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="profil" placeholder="Your name" />
      </div>
      <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
          username
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" placeholder="Your name" />
      </div>
      <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
          email
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your name" />
      </div>
      <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
          password
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Your name" />
      </div>
      <div className=" relative ">
        <label htmlFor="name-with-label" className="text-gray-700">
          phone
        </label>
        <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="phone" placeholder="Your name" />
      </div>
      <div>
        <button className="bg-sigap-ijo px-8 py-2 text-white font-bold uppercase rounded-lg">
          Simpan
        </button>
      </div>
    </div>
  </>)
}