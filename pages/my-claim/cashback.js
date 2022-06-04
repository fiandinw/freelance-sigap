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
          <div className="border-sigap-ijo shadow-lg border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-white font-medium bg-sigap-ijo">
            <div>icon</div>
            <div>Cashback</div>
          </div>
          <Link href="/my-claim/poin" passHref>
            <div className="border-sigap-ijo shadow-lg border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>icon</div>
              <div>Poin</div>
            </div>
          </Link>
        </div>
        <div>
          <div className="text-2xl font-medium capitalize text-gray-500">My Claim</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold"><span className="text-sigap-ijo">Voucher</span> Cashback</div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="mt-8 flex flex-col items-center gap-12">
            <div className="card flex flex-row">
              <div className="relative">
                <img className="w-52" src="/images/subtract.png" alt="" />
                <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-semibold text-white">
                    <div>Cashback</div>
                    <div>30 %</div>
                  </div>
                </div>
              </div>

              <div className="border-2 flex flex-col justify-between border-sigap-ijo rounded-r-lg p-4 px-8">
                <div className="bg-sigap-ijo rounded-md w-fit px-8 font-bold text-white py-1 uppercase">Junior</div>
                <div className="text-4xl font-bold"><span className="text-sigap-ijo">Voucher</span> Cashback</div>
                <div className="flex flex-row justify-between">
                  <div className="font-medium">
                    <div>Min Trk Rp. 100k</div>
                    <div>Max Ptg Rp. 10k</div>
                    <div className="text-opacity-50 text-black">Hingga</div>
                  </div>
                  <div className="pl-36 self-end">
                    <div className="bg-black text-white px-8 py-1 rounded-lg">Pakai</div>
                    <div className="text-center text-sigap-ijo">S&K</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex flex-row">
              <div className="relative">
                <img className="w-52" src="/images/subtract.png" alt="" />
                <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-semibold text-white">
                    <div>Cashback</div>
                    <div>30 %</div>
                  </div>
                </div>
              </div>

              <div className="border-2 flex flex-col justify-between border-sigap-ijo rounded-r-lg p-4 px-8">
                <div className="bg-sigap-ijo rounded-md w-fit px-8 font-bold text-white py-1 uppercase">Junior</div>
                <div className="text-4xl font-bold"><span className="text-sigap-ijo">Voucher</span> Cashback</div>
                <div className="flex flex-row justify-between">
                  <div className="font-medium">
                    <div>Min Trk Rp. 100k</div>
                    <div>Max Ptg Rp. 10k</div>
                    <div className="text-opacity-50 text-black">Hingga</div>
                  </div>
                  <div className="pl-36 self-end">
                    <div className="bg-black text-white px-8 py-1 rounded-lg">Pakai</div>
                    <div className="text-center text-sigap-ijo">S&K</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex flex-row">
              <div className="relative">
                <img className="w-52" src="/images/subtract.png" alt="" />
                <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-semibold text-white">
                    <div>Cashback</div>
                    <div>30 %</div>
                  </div>
                </div>
              </div>

              <div className="border-2 flex flex-col justify-between border-sigap-ijo rounded-r-lg p-4 px-8">
                <div className="bg-sigap-ijo rounded-md w-fit px-8 font-bold text-white py-1 uppercase">Junior</div>
                <div className="text-4xl font-bold"><span className="text-sigap-ijo">Voucher</span> Cashback</div>
                <div className="flex flex-row justify-between">
                  <div className="font-medium">
                    <div>Min Trk Rp. 100k</div>
                    <div>Max Ptg Rp. 10k</div>
                    <div className="text-opacity-50 text-black">Hingga</div>
                  </div>
                  <div className="pl-36 self-end">
                    <div className="bg-black text-white px-8 py-1 rounded-lg">Pakai</div>
                    <div className="text-center text-sigap-ijo">S&K</div>
                  </div>
                </div>
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