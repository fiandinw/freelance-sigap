import Footer from "../components/Footer"
import HeadNav from "../components/HeadNav"
import Link from "next/link";

function MyList() {
  return (
    <div className="min-h-screen">
      <HeadNav warnaBg='bg-putih' login />
      <main className="pt-48 pb-32 px-16 2xl:px-32 flex flex-col gap-12">
        <div>
          <div className="text-2xl font-medium capitalize text-gray-500">My List</div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-bold">FAVORITE <span className="text-sigap-ijo">SERVICE</span></div>
          </div>
        </div>
        <div className="mt-4 border-t-2">
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

export default MyList