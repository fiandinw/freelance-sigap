import Footer from "../../components/Footer"
import HeadNav from "../../components/HeadNav"
import Link from "next/link";

function PriceList() {
  return (
    <div className="min-h-screen">
      <HeadNav warnaBg='bg-putih' login />
      <main className="pt-48 pb-32 px-16 2xl:px-32 flex flex-col gap-12">
        <div className="flex flex-row gap-16 items-center">
          <div className="w-3/12 shadow-lg text-center p-4">
            <div className="text-2xl font-medium">Hi user,</div>
            <div className="mt-4">Buat custom order dan Dapatkan penawaran dari penjual untuk proyek anda</div>
            <div className="mt-16"><Link href="/custom-request" passHref><button className="capitalize bg-sigap-ijo text-white rounded-full w-full py-4 font-bold">custom request</button></Link>
            </div>
          </div>
          <div className="grow">promo</div>
        </div>

        <div className="">
          <div className="text-2xl font-medium capitalize text-gray-500">terpopuler</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">KATEGORI</div>
            <div className="capitalize text-sigap-ijo font-medium">lihat semua&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/price-list/kategori" passHref><button className="rounded-[100%] w-12 h-12 shadow-lg p-2 text-white bg-sigap-ijo text-center"><i className="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
            </div>
          </div>
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
        <div className="">
          <div className="text-2xl font-medium capitalize text-gray-500">terpopuler</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">KATEGORI</div>
            <div className="capitalize text-sigap-ijo font-medium">lihat semua&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/price-list/kategori" passHref><button className="rounded-[100%] w-12 h-12 shadow-lg p-2 text-white bg-sigap-ijo text-center"><i className="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
            </div>
          </div>
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
        <div className="">
          <div className="text-2xl font-medium capitalize text-gray-500">terpopuler</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">KATEGORI</div>
            <div className="capitalize text-sigap-ijo font-medium">lihat semua&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/price-list/kategori" passHref><button className="rounded-[100%] w-12 h-12 shadow-lg p-2 text-white bg-sigap-ijo text-center"><i className="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
            </div>
          </div>
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
        <div className="">
          <div className="text-2xl font-medium capitalize text-gray-500">terpopuler</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">KATEGORI</div>
            <div className="capitalize text-sigap-ijo font-medium">lihat semua&nbsp;&nbsp;&nbsp;&nbsp;<button className="rounded-[100%] w-12 h-12 shadow-lg p-2 text-white bg-sigap-ijo text-center"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
          </div>
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