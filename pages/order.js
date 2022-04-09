import { useRouter } from "next/router"
import { useState } from "react"
import swal from "sweetalert"
import Footer from "../components/Footer"
import HeadNav from "../components/HeadNav"

function Order() {
  const router = useRouter()

  const [jenisJasa, setJenisJasa] = useState('desain')

  // const handleOrder = (e) => {
  //   e.preventDefault()
  //   swal('Pilhan Pembayaran', '{payments}').then(() => {
  //     swal("Pembayaran Gagal", "{error}", "error");
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/status')
  }

  const handleJenisJasa = (e) => {
    setJenisJasa(e.target.value)
  }

  return (
    <>
      <div className="bg-abuabu min-h-screen font-lato">
        <HeadNav warnaBg='bg-putih' />
        <main className="pt-32 pb-12">
          <form onSubmit={handleSubmit} className="flex flex-col w-screen items-center px-32 gap-4">
            <div className="text-hijau-tua uppercase font-bold text-4xl">form e-order</div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="nama">Nama</label>
              <input className="w-full border-hijau-tua border-2 rounded-md bg-abuabu px-3 py-1 text-hijau-black focus:outline-none" id="nama" name="nama" type="text" placeholder="Masukan Nama Anda" />
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="email">Alamat E-Mail</label>
              <input className="w-full border-hijau-tua border-2 rounded-md bg-abuabu px-3 py-1 text-hijau-black focus:outline-none" id="email" name="email" type="text" placeholder="Masukan Email Anda" />
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="telepon">Nomor Telepon</label>
              <input className="w-full border-hijau-tua border-2 rounded-md bg-abuabu px-3 py-1 text-hijau-black focus:outline-none" id="telepon" name="telepon" type="number" placeholder="Masukan Nomor Telepon Anda (+62)" />
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="jenisJasa">Jenis Jasa</label>
              <select onChange={handleJenisJasa} className="w-full border-hijau-tua border-2 rounded-md bg-hijau-tua px-3 py-1 text-putih focus:outline-none" name="jenisJasa" id="jenisJasa">
                <option value="desain">Desain</option>
                <option value="penulisan">Penulisan dan Penerjemahan</option>
                <option value="video">Video dan Film</option>
                <option value="foto">Fotografi</option>
                <option value="teknisi">Teknisi *Bandung Raya</option>
                <option value="barber">BarberLine *Bandung Raya</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="subJenisJasa">Sub Jenis Jasa</label>
              <select className="w-full border-hijau-tua border-2 rounded-md bg-hijau-tua px-3 py-1 text-putih focus:outline-none" name="jenisJasa" id="jenisJasa">
                {jenisJasa == 'desain' && (
                  <>
                    <option value="desain">desain</option>
                    <option value="desain">desain</option>
                    <option value="desain">desain</option>
                    <option value="desain">desain</option>
                  </>
                )}
                {jenisJasa == 'penulisan' && (
                  <>
                    <option value="penulisan">penulisan</option>
                    <option value="penulisan">penulisan</option>
                    <option value="penulisan">penulisan</option>
                    <option value="penulisan">penulisan</option>
                  </>
                )}
                {jenisJasa == 'video' && (
                  <>
                    <option value="video">video</option>
                    <option value="video">video</option>
                    <option value="video">video</option>
                    <option value="video">video</option>
                  </>
                )}
                {jenisJasa == 'foto' && (
                  <>
                    <option value="foto">foto</option>
                    <option value="foto">foto</option>
                    <option value="foto">foto</option>
                    <option value="foto">foto</option>
                  </>
                )}
                {jenisJasa == 'teknisi' && (
                  <>
                    <option value="teknisi">teknisi</option>
                    <option value="teknisi">teknisi</option>
                    <option value="teknisi">teknisi</option>
                    <option value="teknisi">teknisi</option>
                  </>
                )}
                {jenisJasa == 'barber' && (
                  <>
                    <option value="barber">barber</option>
                    <option value="barber">barber</option>
                    <option value="barber">barber</option>
                    <option value="barber">barber</option>
                  </>
                )}
              </select>
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="jenisFreelance">Kategori Freelance</label>
              <select className="w-full border-hijau-tua border-2 rounded-md bg-hijau-tua px-3 py-1 text-putih focus:outline-none" name="jenisFreelance" id="jenisFreelance">
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="expert">Expert</option>
              </select>
              <div className="mt-2">
                <input className="mr-1" type="radio" name="sigapPil" id="sigapPil1" value="sigap" />
                <label className="text-hijau-black font-semibold" htmlFor="sigapPil1">Sigap</label>
                <input className="ml-4 mr-1" type="radio" name="sigapPil" id="sigapPil2" value="superSigap" />
                <label className="text-hijau-black font-semibold" htmlFor="sigapPil2">Super Sigap</label>
              </div>
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="estimasi">Estimasi Pengerjaan</label>
              <select className="w-full border-hijau-tua border-2 rounded-md bg-hijau-tua px-3 py-1 text-putih focus:outline-none" name="estimasi" id="estimasi">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="batasRevisi">Batas Revisi</label>
              <select className="w-full border-hijau-tua border-2 rounded-md bg-hijau-tua px-3 py-1 text-putih focus:outline-none" name="batasRevisi" id="batasRevisi">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-hijau-tua font-semibold text-xl" htmlFor="catatan">Catatan Tambahan</label>
              <textarea className="w-full border-hijau-tua border-2 rounded-md bg-abuabu px-3 py-1 text-hijau-black focus:outline-none" name="catatan" id="catatan"></textarea>
            </div>
            <div className="w-full">
              <p className="font-bold">Petunjuk, Syarat dan Ketentuan</p>
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
            </div>
            <div className="w-full flex flex-row items-center">
              <input type="checkbox" name="agree" id="agree" className="w-5 h-5 mr-3"/>
              <label htmlFor="agree">Saya sebagai klien mematuhi segala aturan pada S&K diatas</label>
            </div>
            <div className="w-full">
              <button className="bg-hijau-tua text-putih text-2xl font-bold px-4 py-2 rounded-lg" type="submit">Submit</button>
            </div>
          </form>
        </main>
        <Footer />
      </div>
    </>
    // <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-500">

    //   <div>
    //     <nav className="bg-white dark:bg-gray-800  shadow ">
    //       <div className="max-w-7xl mx-auto px-8">
    //         <div className="flex items-center justify-between h-16">
    //           <div className="w-full justify-between flex items-center">
    //             <a className="flex-shrink-0" href="/">
    //               <img className="h-8 w-8" src="/images/logogram.png" alt="Logo Freelance Sigap" />
    //             </a>
    //             <div className="hidden md:block">
    //               <div className="ml-10 flex items-baseline space-x-4">
    //                 <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => { router.push('/') }}>
    //                   Dashboard
    //                 </a>
    //                 <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    //                   Order
    //                 </a>
    //                 <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    //                   Content
    //                 </a>
    //                 <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
    //                   Contact
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="block">
    //             <div className="ml-4 flex items-center md:ml-6">
    //             </div>
    //           </div>
    //           <div className="-mr-2 flex md:hidden">
    //             <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
    //               <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
    //                 </path>
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="md:hidden">
    //         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //           <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
    //             Dashboard
    //           </a>
    //           <a className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
    //             Order
    //           </a>
    //           <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
    //             Content
    //           </a>
    //           <a className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
    //             Contact
    //           </a>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>

    //   <section className="h-screen mt-8">
    //     <form onSubmit={handleOrder} className="container max-w-2xl mx-auto shadow-md md:w-3/4">
    //       <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-80">
    //         <div className="max-w-sm mx-auto md:w-full md:mx-0">
    //           <div className="inline-flex items-center space-x-4">
    //             <a href="#" className="block relative">
    //               <img alt="profil" src="/images/logogram.png" className="mx-auto object-cover rounded-full h-16 w-16 " />
    //             </a>
    //             <h1 className="text-gray-600">
    //               E-Order Sigap
    //             </h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="space-y-4 bg-white">
    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             NAMA
    //           </h2>
    //           <div className="max-w-sm mx-auto md:w-2/3">
    //             <div className=" relative ">
    //               <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="masukan nama anda" />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             ALAMAT EMAIL
    //           </h2>
    //           <div className="max-w-sm mx-auto md:w-2/3">
    //             <div className=" relative ">
    //               <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="masukan nama anda" />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             No. Telepon
    //           </h2>
    //           <div className="max-w-sm mx-auto md:w-2/3">
    //             <div className=" relative ">
    //               <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="8214-6569-9898" />
    //             </div>
    //           </div>
    //         </div>

    //         <hr />

    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             Jenis Jasa
    //           </h2>
    //           <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
    //             <div>
    //               <div className=" relative ">
    //                 <select onChange={handleJenisJasa} className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    //                   <option value="" disabled>
    //                     Jenis Jasa
    //                   </option>
    //                   <option value="desain">
    //                     desain
    //                   </option>
    //                   <option value="penulisan">
    //                     penulisan
    //                   </option>
    //                   <option value="video">
    //                     video
    //                   </option>
    //                   <option value="fotografi">
    //                     fotografi
    //                   </option>
    //                   <option value="teknisi">
    //                     teknisi
    //                   </option>
    //                   <option value="barberline">
    //                     barberline
    //                   </option>
    //                 </select>
    //               </div>
    //             </div>
    //             <div>
    //               <div className=" relative ">

    //                 {jenisJasa == 'desain' && (
    //                   <>
    //                     <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    //                       <option value="" disabled>
    //                         Sub Jenis Jasa
    //                       </option>
    //                       <option value="desain">
    //                         desain
    //                       </option>
    //                       <option value="logo">
    //                         logo
    //                       </option>
    //                       <option value="art">
    //                         art
    //                       </option>
    //                       <option value="fashion">
    //                         fashion
    //                       </option>
    //                     </select>
    //                   </>
    //                 )}

    //                 {jenisJasa == 'penulisan' && (
    //                   <>
    //                     <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    //                       <option value="" disabled>
    //                         Sub Jenis Jasa
    //                       </option>
    //                       <option value="esai">
    //                         esai
    //                       </option>
    //                       <option value="resume">
    //                         resume
    //                       </option>
    //                       <option value="script">
    //                         script
    //                       </option>
    //                       <option value="content">
    //                         content
    //                       </option>
    //                       <option value="makalah">
    //                         makalah
    //                       </option>
    //                     </select>
    //                   </>
    //                 )}

    //                 {jenisJasa == 'video' && (
    //                   <>
    //                     <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    //                       <option value="" disabled>
    //                         Sub Jenis Jasa
    //                       </option>
    //                       <option value="branding">
    //                         branding
    //                       </option>
    //                       <option value="preweb">
    //                         preweb
    //                       </option>
    //                       <option value="wedding">
    //                         wedding
    //                       </option>
    //                       <option value="event">
    //                         event
    //                       </option>
    //                       <option value="music">
    //                         music
    //                       </option>
    //                       <option value="short">
    //                         short
    //                       </option>
    //                       <option value="kompilasi">
    //                         kompilasi
    //                       </option>
    //                     </select>
    //                   </>
    //                 )}

    //               </div>
    //             </div>
    //             <div>
    //               <div className=" relative ">
    //                 <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
    //                   <option value="" disabled defaultValue>
    //                     Kategori Freelance
    //                   </option>
    //                   <option value="newbie">
    //                     newbie
    //                   </option>
    //                   <option value="senior">
    //                     senior
    //                   </option>
    //                   <option value="expert">
    //                     expert
    //                   </option>
    //                 </select>

    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <hr />
    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             Batas Revisi
    //           </h2>
    //           <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
    //             <div>
    //               <div className=" relative ">

    //                 <div className="flex items-center gap-8">
    //                   <label className="inline-flex items-center">
    //                     <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" />
    //                     <span className="ml-2 text-gray-700">
    //                       3X
    //                     </span>
    //                   </label>
    //                   <label className="inline-flex items-center">
    //                     <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" />
    //                     <span className="ml-2 text-gray-700">
    //                       5X
    //                     </span>
    //                   </label>
    //                 </div>

    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <hr />
    //         <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-1/3">
    //             Personal info
    //           </h2>
    //           <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
    //             <div>
    //               <div className=" relative ">
    //                 <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
    //               </div>
    //             </div>
    //             <div>
    //               <div className=" relative ">
    //                 <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <hr />
    //         <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
    //           <h2 className="max-w-sm mx-auto md:w-4/12">
    //             Change password
    //           </h2>
    //           <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
    //             <div className=" relative ">
    //               <input type="text" id="user-info-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
    //             </div>
    //           </div>
    //           <div className="text-center md:w-3/12 md:pl-6">
    //             <button type="button" className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    //               Change
    //             </button>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
    //           <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    //             Pilih Pembayaran
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </section>


    // </div>

  )
}

export default Order