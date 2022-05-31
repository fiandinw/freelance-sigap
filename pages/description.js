import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

export default function Deskripsi() {
  return (
    <>
      <HeadNav type="landing" />
      <div className="pt-32 pb-32 px-8 min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="capitalize font-lato text-4xl"><span className="font-extrabold text-sigap-ijo">freelance</span> <span className="font-bold">sigap</span></div>
        <div className="text-justify font-semibold text-sigap-abu">
          Freelance Sigap merupakan penyedia jasa di bidang multimedia dan produk kreatif. Kami berkomitmen menyediakan pelayanan yang efektif dalam transaksi jasa. Upaya kami tetap memberikan performa terbaik untuk para pembeli, sehingga kenyamanan pembeli lebih diprioritaskan. Selain daripada itu, kami pun berupaya membuat klasifikasi pasar untuk para pembuat jasa dengan tujuan memberikan umpan balik yang sesuai.
        </div>
      </div>
      <Footer />
    </>
  )
}