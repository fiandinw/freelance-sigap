import { useState } from "react";
import swal from "sweetalert";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

function Status() {
  const [statusBayar, setStatusBayar] = useState(false)

  const toggleStatusBayar = () => {
    setStatusBayar(!statusBayar)
  }

  const handleCheckout = () => {
    swal({
      title: "midtrans",
      text: "midtrans",
      icon: "info",
    })
  }

  return (
    <>
      <div className="bg-abuabu min-h-screen">
        <HeadNav warnaBg='bg-putih' />
        <main className="pt-32 pb-12 px-8 flex flex-col items-center justify-center gap-8 min-h-screen">
          <div className="text-5xl uppercase text-hijau-dark">status order</div>
          <div className="w-6/12 bg-hitam text-putih flex flex-col items-center justify-center p-8 gap-8 rounded-2xl">
            <div className="flex flex-row gap-4">
              <div>
                <ul>
                  <li>ID ORDER</li>
                  <li>NAMA PEMESAN</li>
                  <li>JENIS JASA</li>
                  <li>SUB JENIS JASA</li>
                  <li>HARGA JASA</li>
                  <li onClick={toggleStatusBayar}>STATUS BAYAR</li>
                </ul>
              </div>
              <div>
                <div>
                  <ul>
                    <li>ID ORDER</li>
                    <li>NAMA PEMESAN</li>
                    <li>JENIS JASA</li>
                    <li>SUB JENIS JASA</li>
                    <li>HARGA JASA</li>
                    <li className="font-bold">
                      {statusBayar ? 'SUDAH BAYAR' : 'BELUM BAYAR'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {!statusBayar ? (
                <>
                  <button onClick={handleCheckout} className="bg-hijau-med px-8 py-2 font-bold rounded-lg">CHECKOUT</button>
                </>
              ) : (
                <>
                  <a href="https://wa.me/082216901343" target='_blank' rel="noreferrer" className="bg-hijau-med px-8 py-2 font-bold rounded-lg">
                  <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i> SERVICE CENTER</a>
                </>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
}

export default Status