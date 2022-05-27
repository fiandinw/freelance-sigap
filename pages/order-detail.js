import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Sticky from "react-sticky-el";
import Link from "next/link";

export default function OrderDetail() {
  return (
    <>
      <HeadNav />
      <main className="pt-44 pb-32 px-28 2xl:px-32 flex flex-col gap-8">
        <div className="flex gap-12">
          <div className="text-sigap-ijo font-semibold">Order Detail</div>
          <Link href="/order-detail" passHref><div>Pembayaran</div></Link>
        </div>

        <div className="flex flex-row">
          <div className="w-8/12 mr-8 flex flex-col gap-8">
            <div className="flex flex-row gap-8">
              <div className="rounded-lg overflow-hidden"><img src="https://picsum.photos/200/100" alt="" /></div>
              <div>
                <div className="font-bold uppercase">judul</div>
                <div>bintang</div>
              </div>
            </div>
            <div className="uppercase font-semibold text-4xl">paket basic</div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, vel. Impedit consectetur voluptatem quod ipsum aperiam modi voluptatum culpa, molestias amet odio ipsam illo autem earum, soluta rem optio accusamus dolorem in labore harum minima ratione maiores! Magnam sequi quibusdam facilis accusantium corporis quia doloribus optio neque cumque dicta ipsum, quo adipisci fugit deleniti! Magni inventore expedita eos blanditiis quo asperiores sunt quas aperiam sint, sapiente, praesentium minus unde at omnis dignissimos illo cumque quos id debitis, consectetur maxime? Quas temporibus non, vitae culpa omnis officiis voluptas id sequi deserunt saepe placeat nobis totam magni voluptatibus fuga obcaecati itaque voluptatem?</div>
            <div className="border-2 p-4">
              <div className="flex flex-row items-center gap-2">
                <i className="fa fa-check-circle fa-2x text-sigap-ijo" aria-hidden="true"></i>
                <div>luaran produk</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <i className="fa fa-check-circle fa-2x text-sigap-ijo" aria-hidden="true"></i>
                <div>luaran produk</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <i className="fa fa-check-circle fa-2x text-sigap-ijo" aria-hidden="true"></i>
                <div>luaran produk</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <i className="fa fa-check-circle fa-2x text-sigap-ijo" aria-hidden="true"></i>
                <div>luaran produk</div>
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