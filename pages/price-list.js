import Footer from "../components/Footer"
import HeadNav from "../components/HeadNav"
import Link from "next/link";

function PriceList() {
  return (
    <div className="bg-abuabu min-h-screen font-lato">
      <HeadNav warnaBg='bg-putih' login />
      <main className="pt-32 pb-32 px-8 flex flex-col min-h-screen gap-8">

        <div className="text-center text-xl text-hijau-tua font-bold">Price List</div>

        <div className="flex">
          <Link href="/product" passHref>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a className="w-full block h-full">
                <img alt="blog photo" src="https://picsum.photos/200" className="max-h-40 w-full object-cover" />
                <div className="bg-hijau-tua text-abuabu dark:bg-gray-800 w-full p-4">
                  <p className=" text-md font-medium">
                    Product
                  </p>
                  <p className=" dark:text-white text-xl font-medium mb-2">
                    Lorem ipsum dolor
                  </p>
                  <p className=" dark:text-gray-300 font-light text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas cumque placeat nemo provident sunt quas ad obcaecati laudantium nihil!
                  </p>
                  <div className="flex items-center mt-4">
                    <a className="block relative">
                      <img alt="profil" src="https://picsum.photos/200" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className=" dark:text-white">
                        Udin Jaelani
                      </p>
                      <p className=" dark:text-gray-300">
                        Rating (5 / 5)
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Link>
          <Link href="/product" passHref>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a className="w-full block h-full">
                <img alt="blog photo" src="https://picsum.photos/200" className="max-h-40 w-full object-cover" />
                <div className="bg-hijau-tua text-abuabu dark:bg-gray-800 w-full p-4">
                  <p className=" text-md font-medium">
                    Product
                  </p>
                  <p className=" dark:text-white text-xl font-medium mb-2">
                    Lorem ipsum dolor
                  </p>
                  <p className=" dark:text-gray-300 font-light text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas cumque placeat nemo provident sunt quas ad obcaecati laudantium nihil!
                  </p>
                  <div className="flex items-center mt-4">
                    <a className="block relative">
                      <img alt="profil" src="https://picsum.photos/200" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className=" dark:text-white">
                        Udin Jaelani
                      </p>
                      <p className=" dark:text-gray-300">
                        Rating (5 / 5)
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Link>
          <Link href="/product" passHref>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a className="w-full block h-full">
                <img alt="blog photo" src="https://picsum.photos/200" className="max-h-40 w-full object-cover" />
                <div className="bg-hijau-tua text-abuabu dark:bg-gray-800 w-full p-4">
                  <p className=" text-md font-medium">
                    Product
                  </p>
                  <p className=" dark:text-white text-xl font-medium mb-2">
                    Lorem ipsum dolor
                  </p>
                  <p className=" dark:text-gray-300 font-light text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas cumque placeat nemo provident sunt quas ad obcaecati laudantium nihil!
                  </p>
                  <div className="flex items-center mt-4">
                    <a className="block relative">
                      <img alt="profil" src="https://picsum.photos/200" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className=" dark:text-white">
                        Udin Jaelani
                      </p>
                      <p className=" dark:text-gray-300">
                        Rating (5 / 5)
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PriceList