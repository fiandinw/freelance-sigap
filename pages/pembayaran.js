import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Sticky from "react-sticky-el";
import Link from "next/link";

export default function Pembayaran() {
  return (
    <>
      <HeadNav />
      <main className="pt-44 pb-32 px-28 2xl:px-32">
        <div className="flex gap-12">
          <Link href="/order-detail" passHref>
            <div>Order Detail</div>
          </Link>
          <div className="text-sigap-ijo font-semibold">Pembayaran</div>
        </div>

        <div className="flex flex-row">
          <div className="w-8/12 flex flex-col">
            <div>asd</div>
            <div>asd</div>
          </div>
          <Sticky className="w-4/12 relative" topOffset={-170} stickyClassName="mt-44">
            <div className="shadow-lg flex flex-col p-4">
              <div className="font-bold capitalize text-lg">rincian pembayaran</div>
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>Rp. x</div>
              </div>
              <div className="flex justify-between">
                <div>Biaya Penanganan</div>
                <div>Rp. x</div>
              </div>
              <div className="border-[1px] border-gray-300 my-6"></div>
              <div className="flex justify-between">
                <div>Total</div>
                <div className="text-xl font-bold">Rp. x</div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-xl font-bold">Waktu Pengerjaan</div>
                <div className="text-xl font-bold text-sigap-ijo">X Hari</div>
              </div>
              <div className="border-[1px] border-gray-300 my-6"></div>
              <button className="capitalize bg-sigap-ijo text-white rounded-full w-full py-4 font-bold">Bayar</button>
              <div className="mt-2 text-center">Anda belum akan dikenakan biaya</div>
            </div>
          </Sticky>
        </div>
      </main>
      <Footer />
    </>
  )
}