import Footer from "../../components/Footer"
import HeadNav from "../../components/HeadNav"
import Link from "next/link";

function Diskon() {
  return (
    <div className="min-h-screen">
      <HeadNav warnaBg='bg-putih' login />
      <main className="pt-48 pb-32 px-16 2xl:px-32 flex flex-col gap-8">
        <div className="flex flex-row items-center justify-center gap-12">
          <Link href="/my-claim/diskon" passHref>
            <div className="border-sigap-ijo shadow-lg border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>icon</div>
              <div>Diskon</div>
            </div>
          </Link>
          <Link href="/my-claim/cashback" passHref>
            <div className="border-sigap-ijo shadow-lg border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>icon</div>
              <div>Cashback</div>
            </div>
          </Link>
          <div className="border-sigap-ijo shadow-lg border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-white font-medium bg-sigap-ijo">
            <div>icon</div>
            <div>Poin</div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-medium capitalize text-gray-500">My Claim</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold"><span className="text-sigap-ijo">Reward</span> Point</div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="mt-8 flex flex-col items-center gap-12">
            <div className="w-full shadow-lg p-4">
              <div className="text-4xl font-bold">Status <span className="text-sigap-ijo">Point</span></div>
              <div className="text-center text-6xl font-bold">0</div>
            </div>
            <div className="px-8 rounded-full py-1 bg-sigap-ijo text-white"> 
              Dapatkan poin dengan klaim dibawah ini
            </div>
            <div className="flex flex-row gap-12">
              <div className="text-center flex flex-col items-center justify-between shadow-lg bg-white py-4">
                <div className="border-b-2 text-2xl text-gray-400 p-4">Reedem Feedback</div>
                <div className="w-24 h-24">icon</div>
                <div className="bg-sigap-ijo px-16 py-2 w-fit text-white text-center rounded-full">Klaim</div>
              </div>
              <div className="text-center flex flex-col items-center justify-between shadow-lg bg-white py-4">
                <div className="border-b-2 text-2xl text-gray-400 p-4">Reedem Event</div>
                <div className="w-24 h-24">icon</div>
                <div className="bg-sigap-ijo px-16 py-2 w-fit text-white text-center rounded-full">Klaim</div>
              </div>
              <div className="text-center flex flex-col items-center justify-between shadow-lg bg-white py-4">
                <div className="border-b-2 text-2xl text-gray-400 p-4">Reedem Cashback</div>
                <div className="w-24 h-24">icon</div>
                <div className="bg-sigap-ijo px-16 py-2 w-fit text-white text-center rounded-full">Klaim</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Diskon