import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

export default function () {
  return (<>
    <HeadNav />
    <div className="pt-44 pb-32 px-28 2xl:px-32 flex flex-col gap-8">
      <div className="text-center font-bold text-4xl">My Order</div>
      <div>
        <div className="font-bold text-2xl">Ongoing</div>
        <div className="bg-white shadow-lg p-8 flex flex-row">
          <div className="flex self-center items-center justify-center border-2 w-64 h-36">
          <div><img className="w-64 h-36 bg-cover" src="https://picsum.photos/200" alt="" /></div>
          </div>
          <div className="grow flex flex-col items-center gap-4">
            <div className="p-4 font-bold text-2xl uppercase">Judul Produk</div>
            <div className="grow flex flex-row items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl bg-sigap-ijo">icon</div>
                <div className="capitalize">order dibuat</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">permbayaran</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">order proses</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">tinjauan</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">selesai</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl">Previous</div>
        <div className="bg-white shadow-lg p-8 flex flex-row">
          <div className="flex self-center items-center justify-center border-2 w-64 h-36">
            <div><img className="w-64 h-36 bg-cover" src="https://picsum.photos/200" alt="" /></div>
          </div>
          <div className="grow flex flex-col items-center gap-4">
            <div className="p-4 font-bold text-2xl uppercase">Judul Produk</div>
            <div className="grow flex flex-row items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl bg-sigap-ijo">icon</div>
                <div className="capitalize">order dibuat</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">permbayaran</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">order proses</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">tinjauan</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">selesai</div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="border-2 rounded-full w-16 h-16 shadow-xl">icon</div>
                <div className="capitalize">feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}