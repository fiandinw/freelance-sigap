import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
function Dashboard() {
  return (
    <>
      <div className=" min-h-screen font-lato">
        <HeadNav warnaBg='bg-putih' login />
        <main className="pt-48 pb-32 px-28 2xl:px-32 flex flex-col gap-24 items-center">

          <section className="w-full flex flex-row items-center justify-evenly">
            <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer">
              <div className="self-end">icon</div>
              <div className="grow flex items-center justify-center">
                <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
              </div>
              <div className="font-lato font-medium text-4xl text-center">Custom Request</div>
            </div>
            <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer">
              <div className="self-end">icon</div>
              <div className="grow flex items-center justify-center">
                <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
              </div>
              <div className="font-lato font-medium text-4xl text-center">Instant Order</div>
            </div>
            <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer">
              <div className="self-end">icon</div>
              <div className="grow flex items-center justify-center">
                <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
              </div>
              <div className="font-lato font-medium text-4xl text-center">Main Profile</div>
            </div>
          </section>

          <section className="w-full flex flex-col gap-12">
            <div className="flex flex-row items-center justify-between">
              <div>
                <div className="font-lato text-gray-400 text-2xl">The latest freelance work!</div>
                <div className="font-lato font-bold text-5xl">Recently Posted <span className="text-sigap-ijo">Works</span></div>
              </div>
              <div className="flex flex-row gap-8">
                <button className="rounded-[100%] w-16 h-16 shadow-lg p-4 hover:bg-sigap-ijo text-center text-sigap-ijo hover:text-white"><i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i></button>
                <button className="rounded-[100%] w-16 h-16 shadow-lg p-4 hover:bg-sigap-ijo text-center text-sigap-ijo hover:text-white"><i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i></button>
              </div>
            </div>
            
            <div className="w-full grid grid-cols-3 gap-8 h-96 2xl:h-[32rem]">
              <div className="grid grid-row-3 rounded-3xl shadow-lg p-8 w-full min-h-full">
                <div className="flex items-center justify-center">Icon</div>
                <div className="text-center">
                  <div className="font-lato font-bold text-4xl">Logo Design</div>
                  <div className="text-gray-400">Need a professional logo</div>
                </div>
                <div className="flex flex-row w-full items-end justify-between">
                  <div className="text-center">
                    <div className="font-semibold text-gray-400">Start from</div>
                    <div className="text-sigap-ijo">Rp <span className="font-black text-2xl">250.000</span></div>
                  </div>
                  <button className="text-white bg-sigap-ijo px-6 p-2 rounded-full">Apply Now</button>
                </div>
              </div>

              <div className="grid grid-row-3 rounded-3xl shadow-lg p-8 w-full min-h-full">
                <div className="flex items-center justify-center">Icon</div>
                <div className="text-center">
                  <div className="font-lato font-bold text-4xl">Graphic Design</div>
                  <div className="text-gray-400">Need a professional logo</div>
                </div>
                <div className="flex flex-row w-full items-end justify-between">
                  <div className="text-center">
                    <div className="font-semibold text-gray-400">Start from</div>
                    <div className="text-sigap-ijo">Rp <span className="font-black text-2xl">250.000</span></div>
                  </div>
                  <button className="text-white bg-sigap-ijo px-6 p-2 rounded-full">Apply Now</button>
                </div>
              </div>
              
              <div className="grid grid-row-3 rounded-3xl shadow-lg p-8 w-full min-h-full">
                <div className="flex items-center justify-center">Icon</div>
                <div className="text-center">
                  <div className="font-lato font-bold text-4xl">Need a SEO</div>
                  <div className="text-gray-400">Need a professional logo</div>
                </div>
                <div className="flex flex-row w-full items-end justify-between">
                  <div className="text-center">
                    <div className="font-semibold text-gray-400">Start from</div>
                    <div className="text-sigap-ijo">Rp <span className="font-black text-2xl">250.000</span></div>
                  </div>
                  <button className="text-white bg-sigap-ijo px-6 p-2 rounded-full">Apply Now</button>
                </div>
              </div>

            </div>
          </section>

          <section className="bg-sigap-ijo w-full">
            Choose Diferent Category
          </section>

          <section className="bg-sigap-ijo w-full">
            Checkout The Best Portfolios Here
          </section>

          <form className="flex flex-col bg-gradient-to-br from-sigap-ijo to-white items-center w-screen p-24 gap-8" onSubmit={(e) => { e.preventDefault(); console.log('Success') }}>
            <div className="font-lato font-bold text-6xl">Newsletter Subscription</div>
            <div className="text-gray-500 text-2xl mb-12">Subscribe to our newsletter to get new freelance work and projects</div>
            <input className="rounded-full shadow-md px-32 py-4 text-2xl" type="text" placeholder="Enter your email address" />
            <button className="bg-sigap-ijo text-white font-bold text-2xl px-16 py-4 rounded-full" type="submit">Subscribe</button>
          </form>
          {/* <div className="w-56"></div>
          <div className="grow flex justify-center items-center flex-col gap-24">
            <div className="text-5xl uppercase font-bold text-hijau-dark">freelance sigap</div>
            <div className="flex flex-row gap-8">
              <div className="bg-putih w-96 text-putih rounded-lg border-2 border-hijau-med">
                <div className="bg-hijau-med text-center px-12 py-2 text-3xl uppercase font-semibold h-24 flex items-center justify-center">explore services</div>
                <div className="h-72 p-16 text-center">
                  <Image src='/images/icon-networking.png' width='200' height='200' alt="icon-networking"/>
                </div>
                <Link href="/price-list" passHref>
                  <div className="p-4"><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">explore services</button></div>
                </Link>
              </div>
              <div className="bg-putih w-96 text-putih rounded-lg border-2 border-hijau-med">
                <div className="bg-hijau-med text-center px-12 py-2 text-3xl uppercase font-semibold h-24 flex items-center justify-center">instant order</div>
                <div className="h-72 p-16 text-center">
                  <Image src='/images/icon-form.png' width='200' height='200' alt="icon-form"/>
                </div>
                <Link href='/instant-order' passHref><div className="p-4"><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">make an order</button></div></Link>
              </div>
            </div>
          </div>
          <div className="self-end">
            <div className="bg-putih w-56 text-putih rounded-lg border-2 border-hijau-med">
              <div className="bg-hijau-med px-4 py-2 uppercase font-semibold h-12 flex items-center justify-center">check order status</div>
              <div className="h-36 p-8 text-center">
                <Image src='/images/icon-delivery-status.png' width='100' height='100' alt="icon-delivery"/>
              </div>
              <div className="p-4">
                <Link href='/status' passHref><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">check</button></Link>
              </div>
            </div>
          </div> */}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Dashboard