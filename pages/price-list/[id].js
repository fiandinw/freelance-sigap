import Footer from "../../components/Footer"
import HeadNav from "../../components/HeadNav"
import Link from "next/link";

function PriceList() {
  return (
    <div className="min-h-screen">
      <HeadNav warnaBg='bg-putih' login />
      <main className="pt-48 pb-32 px-16 2xl:px-32 flex flex-col gap-12">
        <div className="">
          <div className="text-2xl font-medium capitalize text-gray-500">terpopuler</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">KATEGORI</div>
          </div>
          <div className="mt-8 flex flex-row justify-between">
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
            <div className="border-sigap-ijo border-2 w-32 h-32 rounded-lg text-center flex flex-col justify-evenly text-sigap-ijo font-medium hover:bg-sigap-ijo hover:text-white">
              <div>logo</div>
              <div>kategori</div>
            </div>
          </div>
          <div className="mt-12 flex flex-row gap-4">
            <select className="capitalize w-36 border-2 rounded-lg p-1" name="harga" id="harga">
              <option value="harga">harga</option>
            </select>
            <select className="capitalize w-36 border-2 rounded-lg p-1" name="paket" id="paket">
              <option value="paket">paket</option>
            </select>
            <select className="capitalize w-36 border-2 rounded-lg p-1" name="pengerjaan" id="pengerjaan">
              <option value="pengerjaan">pengerjaan</option>
            </select>
            <select className="capitalize w-36 border-2 rounded-lg p-1" name="tingakatan" id="tingakatan">
              <option value="tingakatan">tingakatan</option>
            </select>
          </div>
        </div>

        <div className="">

          <div className="mt-8 flex flex-row items-center justify-between">
            <div className="card shadow-lg w-[20%]">
              <div><img className="h-36 w-full object-cover" src="https://picsum.photos/300" alt="" /></div>
              <div className="flex flex-row items-center gap-2 px-4 mt-2">
                <div className="">foto</div>
                <div>
                  <div>freelancer</div>
                  <div>bintang</div>
                </div>
                <div className="w-20 text-center justify-self-end"><div className="bg-sigap-ijo rounded-md text-white">level</div></div>
              </div>
              <div className="px-4 mt-4 text-lg">deskripsi</div>
              <div className="border-t-2 flex flex-row justify-between px-4 mt-4 py-2">
                <div>love</div>
                <div className="text-sigap-ijo font-medium text-opacity-70">Rp <span className="font-extrabold text-2xl">249</span>.K</div>
              </div>
            </div>
            <div className="card shadow-lg w-[20%]">
              <div><img className="h-36 w-full object-cover" src="https://picsum.photos/300" alt="" /></div>
              <div className="flex flex-row items-center gap-2 px-4 mt-2">
                <div className="">foto</div>
                <div>
                  <div>freelancer</div>
                  <div>bintang</div>
                </div>
                <div className="w-20 text-center justify-self-end"><div className="bg-sigap-ijo rounded-md text-white">level</div></div>
              </div>
              <div className="px-4 mt-4 text-lg">deskripsi</div>
              <div className="border-t-2 flex flex-row justify-between px-4 mt-4 py-2">
                <div>love</div>
                <div className="text-sigap-ijo font-medium text-opacity-70">Rp <span className="font-extrabold text-2xl">249</span>.K</div>
              </div>
            </div>
            <div className="card shadow-lg w-[20%]">
              <div><img className="h-36 w-full object-cover" src="https://picsum.photos/300" alt="" /></div>
              <div className="flex flex-row items-center gap-2 px-4 mt-2">
                <div className="">foto</div>
                <div>
                  <div>freelancer</div>
                  <div>bintang</div>
                </div>
                <div className="w-20 text-center justify-self-end"><div className="bg-sigap-ijo rounded-md text-white">level</div></div>
              </div>
              <div className="px-4 mt-4 text-lg">deskripsi</div>
              <div className="border-t-2 flex flex-row justify-between px-4 mt-4 py-2">
                <div>love</div>
                <div className="text-sigap-ijo font-medium text-opacity-70">Rp <span className="font-extrabold text-2xl">249</span>.K</div>
              </div>
            </div>
            <div className="card shadow-lg w-[20%]">
              <div><img className="h-36 w-full object-cover" src="https://picsum.photos/300" alt="" /></div>
              <div className="flex flex-row items-center gap-2 px-4 mt-2">
                <div className="">foto</div>
                <div>
                  <div>freelancer</div>
                  <div>bintang</div>
                </div>
                <div className="w-20 text-center justify-self-end"><div className="bg-sigap-ijo rounded-md text-white">level</div></div>
              </div>
              <div className="px-4 mt-4 text-lg">deskripsi</div>
              <div className="border-t-2 flex flex-row justify-between px-4 mt-4 py-2">
                <div>love</div>
                <div className="text-sigap-ijo font-medium text-opacity-70">Rp <span className="font-extrabold text-2xl">249</span>.K</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PriceList