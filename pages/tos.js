import Footer from "../components/Footer"
import HeadNav from "../components/HeadNav"
import Link from "next/link";

function Products() {
  return (
    <div className="bg-abuabu min-h-screen font-lato">
      <HeadNav warnaBg='bg-putih' />
      <main className="pt-32 pb-32 px-12 flex flex-col min-h-screen gap-8">
        <h1 className="text-2xl">Syarat dan Ketentuan</h1>
        <ol className="list-decimal pl-4">
          <li>Pastikan data yang Anda input pada form e-order sudah benar dan sesuai.</li>
          <li>Freelancer pada platform website Freelance Sigap bekerja dengan professional dan sudah melewati beberapa tahap verifikasi.</li>
          <li>Jam kerja Freelance Sigap pada 06.00 WIB – 17.00 WIB.</li>
          <li>Pengerjaan jasa dimulai saat Anda menginput form e-order diantara jam 06.00 – 17.00 WIB.</li>
          <li>Perhitungan pengerjaan jasa akan ditunda esok hari jika Anda menginput form e-order melebihi jam 17.00 WIB.</li>
          <li>Estimasi waktu yang disediakan sudah mencakupi proses pra-produksi sampai post-produksi.</li>
          <li>Untuk beberapa jenis jasa tertentu seperti Web Development, Web Application, Branding Video, Pre-Wedding Video, Wedding Video, Official Music Video, Short Movie, Movie, Wedding Photo terbentuk atas 1 tim dan memiliki bonus 1 hari untuk brainstorming konsep (terhitung estimasi pengerjaan jasa setelah 1 hari brainstorming konsep).</li>
          <li>Kategori serta rating Freelancer menggambarkan kinerja Freelancer.</li>
          <li>Batas revisi yang disediakan untuk Freelance Sigap dengan berbagai kategori yaitu sebanyak 1 kali, sedangkan batas revisi yang disediakan untuk Freelance Super Sigap dengan berbagai kategori yaitu sebanyak 1 sampai 3 kali.</li>
          <li>Kolom Additional Request ditujukan untuk Anda (sebagai klien) menspesifikasikan output produk yang Anda inginkan.</li>
          <li>Jika Freelancer melanggar perjanjian sesuai dengan permintaan klien (terjadi keterlambatan, maka pihak Freelance Sigap akan bertanggung jawab atas kerugian waktu, dan sebagainya).</li>
          <li>Jika Freelancer melakukan tindakan pelecehan, pencemoohan, ancaman, atau tindakan tercela lainnya mohon laporkan ke email: report@freelancesigap.com dan pihak Freelance Sigap akan menindaklanjutinya, serta jika dikategorikan sebagai pelanggaran berat, maka pihak Freelance Sigap akan memprosesnya sesuai prosedur hukum yang berlaku.</li>
          <li>Jika Anda (sebagai klien) menyalahi aturan serta melanggar perjanjian diluar dari yang diinput pada form e-order, maka bersedia untuk menerima sanksi berupa dihanguskan request ordernya dan tidak ada refund (pengembalian dana).</li>
          <li>Jika Anda (sebagai klien) melakukan tindakan pelecehan, pencemoohan, ancaman, atau tindakan tercela lainnya kepada pihak Freelancer, maka pihak Freelancer berhak memblock secara tidak hormat dan dihanguskannya request order, jika demikian mendapati Anda (sebagai klien) melakukan tindakan tercela dengan kategori berat, maka bersedia untuk mengikuti prosedur hukum yang berlaku.</li>
          <li>Pelanggaran kategori ringan: Membuat risih, Mencemooh, Mencaci maki, Mengganggu privasi tanpa persetujuan diantara keduanya, Respon negatif yang berlebihan, Berlaku tidak waras.</li>
          <li>Pelanggaran kategori berat: Pembunuhan karakter, Penuduhan, Melakukan tindakan pelecehan seksual, Mengancam, Menipu, Pornografi, Rasis.</li>
          <li>Pihak konsumen tunduk terhadap aturan yang sudah dibuat.</li>
          <li>Kedua pihak diharap mematuhi petunjuk, syarat dan ketentuan yang sudah dibuat.</li>
        </ol>
      </main>
      <Footer />
    </div>
  )
}

export default Products