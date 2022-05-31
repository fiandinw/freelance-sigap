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
          <div className="w-8/12 flex flex-col mr-8 pt-4">
            <div className="border-2 font-bold p-4">Metode Pembayaran</div>
            <div className="flex flex-col gap-4 p-4 border-2 border-t-0">
              <div>
                <input type="radio" name="metode" id="metode1" />
                <label htmlFor="metode1">&nbsp;COD &#40;Sekitar Cibiru&#41;</label>
              </div>
              <div>
                <input type="radio" name="metode" id="metode2" />
                <label htmlFor="metode1">&nbsp;E-Wallet</label>
              </div>
              <div>
                <input type="radio" name="metode" id="metode3" />
                <label htmlFor="metode1">&nbsp;Transfer Bank &#40;Verifikasi Manual&#41;</label>
              </div>
            </div>
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
              <a target="_blank" rel="noreferrer" href="https://sample-demo-dot-midtrans-support-tools.et.r.appspot.com/snap"><button className="capitalize bg-sigap-ijo text-white rounded-full w-full py-4 font-bold">Bayar</button></a>
              <div className="mt-2 text-center">Anda belum akan dikenakan biaya</div>
            </div>
            <div className="text-center mt-8">
                <Link href="/my-order" passHref><button className="capitalize shadow-xl bg-sigap-ijo text-white rounded-full w-fit py-4 px-8 font-bold">cek status order</button></Link>
              </div>
          </Sticky>
        </div>
      </main>
      <Footer />
    </>
  )
}