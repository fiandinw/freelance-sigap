import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Sticky from "react-sticky-el";
import Link from "next/link";

export default function OrderDetail() {
  return (
    <>
      <HeadNav />
      <main className="pt-44 pb-32 px-28 2xl:px-32">
        <div className="flex gap-12">
          <div className="text-sigap-ijo font-semibold">Order Detail</div>
          <Link href="/order-detail" passHref><div>Pembayaran</div></Link>
        </div>

        <div className="flex flex-row">
          <div className="w-8/12"></div>
          <Sticky className="w-4/12 relative">
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
              <Link href="/pembayaran" passHref><button className="capitalize bg-sigap-ijo text-white rounded-full w-full py-4 font-bold">Bayar</button></Link>
              <div className="mt-2 text-center">Anda belum akan dikenakan biaya</div>
            </div>
          </Sticky>
        </div>
      </main>
      <Footer />
    </>
  )
}