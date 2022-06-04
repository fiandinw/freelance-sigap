import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import FaqAccordion from "../components/FaqAccordion";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

export default function Home() {
  const sigapbotref = useRef()

  useEffect(() => {
    // gsap.to(sigapbotref.current, { y: '-30', repeat: '-1', duration: 1, yoyoEase: true })
    AOS.init({
      delay: 100
    })
  })

  return (
    <div className="bg-[url('/images/bg.png')] bg-no-repeat bg-contain min-h-screen relative">
      <HeadNav type="landing" />
      <div className="py-16"></div>

      <main className="flex flex-col gap-24 px-16 2xl:px-32 items-center">
        <section className="flex flex-row w-full items-center py-12 2xl:py-24">
          <div className="w-1/2 self-stretch flex flex-col items-start justify-center gap-8">
            <div className="font-lato font-bold text-5xl 2xl:text-7xl capitalize">are you looking for freelancers?</div>
            <div className="capitalize opacity-60 2xl:text-2xl">hire great freelancers, fast. spacelance helps you hire elite freelancers at a moment&apos;s notice</div>
            <div>
              <Link href="/login" passHref>
                <button className="bg-sigap-ijo px-16 py-4 text-white font-bold capitalize rounded-full">find your freelance</button>
              </Link>
            </div>
          </div>
          <div className="grow flex justify-center">
            <img className="max-h-full" src="/images/hello-sigap.png" alt="hello" />
          </div>
        </section>

        <section className="w-full bg-white flex justify-evenly shadow-lg py-4 2xl:py-8">
          <div className="flex flex-col items-center w-48 text-center gap-1">
            <div className="p-2"><img className="max-w-[5rem] 2xl:max-w-[8rem]" src="/images/icon-lock.png" alt="lock" /></div>
            <div className="font-lato font-bold capitalize text-2xl">create account</div>
            <div className="text-sigap-abu">First you have to create a account here</div>
          </div>
          <div className="flex flex-col items-center w-48 text-center gap-1">
            <div className="p-2"><img className="max-w-[5rem] 2xl:max-w-[8rem]" src="/images/icon-search.png" alt="lock" /></div>
            <div className="font-lato font-bold capitalize text-2xl">create account</div>
            <div className="text-sigap-abu">First you have to create a account here</div>
          </div>
          <div className="flex flex-col items-center w-48 text-center gap-1">
            <div className="p-2"><img className="max-w-[5rem] 2xl:max-w-[8rem]" src="/images/icon-guard.png" alt="lock" /></div>
            <div className="font-lato font-bold capitalize text-2xl">create account</div>
            <div className="text-sigap-abu">First you have to create a account here</div>
          </div>
        </section>

        <section className="w-full flex flex-row" data-aos="fade-up">
          <div className="">
            <img className="max-w-[21rem]" src="/images/girl-landing.png" alt="landing girl" />
          </div>
          <div className="w-full text-right flex flex-col gap-8">
            <div className="font-lato font-bold text-5xl 2xl:text-6xl pl-96 2xl:pl-[40rem]">Find The Best <span className="text-sigap-ijo">Freelancers</span> Here</div>
            <div className="flex pl-24">
              <div className="flex flex-row gap-8">
                <div className="w-36 h-36 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center font-lato text-center">
                  <i className="fa fa-fork-awesome fa-4x text-sigap-ijo" aria-hidden="true"></i>
                  <div>Money Guarantee</div>
                </div>
                <div className="w-36 h-36 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center font-lato text-center">
                  <i className="fa fa-fork-awesome fa-4x text-sigap-ijo" aria-hidden="true"></i>
                  <div>Safe Transaction</div>
                </div>
                <div className="w-36 h-36 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center font-lato text-center">
                  <i className="fa fa-fork-awesome fa-4x text-sigap-ijo" aria-hidden="true"></i>
                  <div>Efficient</div>
                </div>
              </div>
            </div>
            <div className="flex pl-48">
              <div className="flex flex-row gap-8">
                <div className="w-36 h-36 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center font-lato text-center">
                  <i className="fa fa-fork-awesome fa-4x text-sigap-ijo" aria-hidden="true"></i>
                  <div>Flexible</div>
                </div>
                <div className="w-36 h-36 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center font-lato text-center">
                  <i className="fa fa-fork-awesome fa-4x text-sigap-ijo" aria-hidden="true"></i>
                  <div>Good Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-screen w-screen">
          <video className="absolute h-full w-full object-cover" autoPlay muted loop>
            <source src="/videos/final.mp4" type="video/mp4" />
            Video cant be played
          </video>
          <div className="inset-0 bg-hitam opacity-50 absolute">
          </div>
          <div className="absolute top-0 left-0 right-0 p-24 flex flex-col justify-center items-start h-full gap-12">
            <div className="font-lato font-bold text-abuabu text-6xl leading-loose">
              Efficiency Value.<br />Make it simple and practical.<br />Positive Transactional.
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center gap-8">
          <div className="font-lato font-bold text-4xl">Our Service</div>
          <div className="flex flex-row gap-16">
            <Link href="/custom-request" passHref>
              <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer"
                data-aos="fade-up"
              >
                <div className="self-end">icon</div>
                <div className="grow flex items-center justify-center">
                  <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
                </div>
                <div className="font-lato font-medium text-4xl text-center">Custom Request</div>
              </div>
            </Link>
            <Link href="/instant-order" passHref>
              <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="self-end">icon</div>
                <div className="grow flex items-center justify-center">
                  <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
                </div>
                <div className="font-lato font-medium text-4xl text-center">Instant Order</div>
              </div>
            </Link>
            <div className="w-80 h-80 shadow-lg p-4 flex flex-col justify-between hover:bg-sigap-ijo hover:text-white transition duration-300 ease-in-out cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="self-end">icon</div>
              <div className="grow flex items-center justify-center">
                <img className="bg-green-300 rounded-full w-48" src="/images/SigapBot1.png" alt="sigapbot" />
              </div>
              <div className="font-lato font-medium text-4xl text-center">Main Profile</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center p-4 gap-8">
          <div className="font-lato font-bold text-4xl">
            Kategori
          </div>
          <div className="flex gap-4">
            <div className="relative bg-putih w-[300px] h-[200px]"
              data-aos="fade-up"
            >
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]"
              data-aos="fade-up"
            >
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]"
              data-aos="fade-up"
            >
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]"
              data-aos="fade-up"
            >
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
          </div>
        </section>

        <section id="faqsection" className="relative flex flex-col items-center justify-center gap-4">
          <div className="font-lato font-bold text-4xl uppercase">faq</div>
          <FaqAccordion
            title="Apa keunggulan menggunakan Freelance Sigap?"
            description="Kami memegang erat pada konsep efisiensi waktu dan harga. Selain itu profesionalitas freelancer dijunjung tinggi dan kami bertekad untuk menghadirkan fitur custom order untuk memberi ruang kepada freelancer kelas newbie untuk menjemput order calon customer juga kepada customer untuk bebas menentukan budget di fitur ini."
          />
          <FaqAccordion
            title="Ada berapa cara order di Freelance Sigap?"
            description="Terdapat 2 cara order, yakni Instan Order dan Custom Order."
          />
          <FaqAccordion
            title="Bagaimana cara order di Freelance Sigap?"
            description="1. Pada Instan Order, calon customer harus melakukan login atau sign up terlebih dahulu, kemudian nanti mengisi e-formulir yang sudah tersedia, harga jasa menyesuaikan jenis jasa, kualitas atau kelas freelancer, dan kecepatan pengerjaan. 
2. Pada Custom Order, calon customer tidak perlu login atau signup terlebih dahulu, dan calon customer bebas menentukan budget untuk membayar jasa freelancer."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap terdapat fitur negosiasi?"
            description="Ya, fitur tersebut bernama Chat and Nego."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap dapat mencicil?"
            description="Ya, ada metode pembayaran mencicil sebanyak 2 kali. Termin 1 membayar sebesar minimal 20%. Termin 2 membayar sisa dari pembayaran termin 1. Metode pembayaran ini berlaku untuk custom order saja."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap dapat CoD?"
            description="Ya, ada metode pembayaran Cash on Delivery untuk calon customer yang tidak memiliki E-Wallet/Bank/Debit dan dapat dijangkau jaraknya. Untuk Cash on Delivery terdapat biaya penanganan sebesar Rp 5.000."
          />
          <FaqAccordion
            title="Bagaimana ketentuan transaksi di Freelance Sigap?"
            description="Calon customer harus memperhatikan syarat dan ketentuan order yang tertera pada Terms and Condition sebelum melakukan order. Semua bentuk persetujuan dari calon customer dianggap sebagai hal yang absah. Terkait kebijakan pembatalan order dari calon customer merupakan tanggung jawab dari calon customer, jika sebaliknya di tengah proyek berjalan dari pihak freelancer terdapat keterlambatan, maka calon customer dapat mengklaim garansi berupa uang kembali 100% atau proyek dialihkan kepada freelancer lain."
          />
          <FaqAccordion
            title="Bagaimana cara klaim garansi?"
            description="Calon customer harus melakukan login atau signup terlebih dahulu. Di sebelah profile calon customer terdapat My Claim dan di sana akan diarahkan kepada support center untuk teknis klaim. Jika calon customer tidak membuat akun, maka klaim garansi tidak berlaku kecuali memiliki rekam jejak transaksi."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap terdapat voucher diskon?"
            description="Ya. Voucher diskon didapatkan dari mengisi review feedback setelah order dan event-event Freelance Sigap."
          />
          <FaqAccordion
            title="Bagaimana cara klaim voucher diskon?"
            description="Calon customer dapat mengklaim voucher diskon di My Claim, kemudian voucher dapat digunakan sesuai dengan ketentuannya."
          />
          <FaqAccordion
            title="Bagaimana jika ingin menambah fitur atau request di tengah proyek?"
            description="Jika terdapat request di tengah berjalannya proyek, hal tersebut diukur oleh bobot permintaan. Jika permintaannya dalam kategori besar, dimungkinkan freelancer akan memberi tagihan pembayaran tambahan. Jika permintaannya hanya sebagian kecil, dimungkinkan freelancer memberi free paid."
          />
          <FaqAccordion
            title="Berapa harga untuk membeli jasa di Freelance Sigap?"
            description="Rate harga di Freelance Sigap mulai dari Rp 15.000"
          />
          <FaqAccordion
            title="Berapa lama proyek yang dikerjakan di Freelance Sigap?"
            description="Pengerjaan proyek tergantung pada jenis dan sub jenis jasa serta pemilihan fitur kecepatan pengerjaan, apabila Sigap merupakan fitur pengerjaan reguler, dan Super Sigap merupakan fitur pengerjaan cepat."
          />
          <FaqAccordion
            title="Apakah menambah permintaan revisi menambah biaya di Freelance Sigap?"
            description="Ya, biaya revisi dihitung Rp 20.000/permintaan."
          />
          <FaqAccordion
            title="Apa yang didapat setelah proyek selesai?"
            description="Calon customer akan mendapatkan voucher diskon, juga customer memiliki tingkatan customer yang dimana akan mempengaruhi harga dan cashback pembelian jasa."
          />
        </section>

        <form className="flex flex-col bg-gradient-to-br from-sigap-ijo to-white items-center w-screen p-24 gap-8" onSubmit={(e) => { e.preventDefault(); console.log('Success') }}>
          <div className="font-lato font-bold text-6xl">Newsletter Subscription</div>
          <div className="text-gray-500 text-2xl mb-12">Subscribe to our newsletter to get new freelance work and projects</div>
          <input className="rounded-full shadow-md px-32 py-4 text-2xl" type="text" placeholder="Enter your email address" />
          <button className="bg-sigap-ijo text-white font-bold text-2xl px-16 py-4 rounded-full" type="submit">Subscribe</button>
        </form>

        <section className="h-16"></section>
        {/* <section className="min-h-screen pt-12 flex flex-col justify-center">
          <div className="italic text-xl text-hijau-tua mx-auto w-fit mt-24 mb-8 font-bold">Stand With Local</div>
          <div className="bg-hitam text-putih flex flex-row justify-between">
            <div className="p-12 shrink w-7/12 flex justify-between flex-col">
              <div className="font-semibold text-4xl leading-snug font-montserrat">Find the perfect <span className="italic text-hijau-muda">freelance</span> services for your business</div>
              <Link href='/login' passHref>
                <div className="uppercase bg-hijau-tua font-semibold text-abuabu text-xl w-fit px-14 py-3 rounded-full cursor-pointer hover:text-putih">join now</div>
              </Link>
            </div>
            <div ref={sigapbotref}>
              <Image src="/images/Sigapbot3.png" width={300} height={300} alt='sigapbot' />
            </div>
          </div>
          <div className="flex flex-row gap-8 text-hijau-black mt-4 p-16">
            <i className="fa fa-facebook-square fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-twitter-square fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-whatsapp fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-2x cursor-pointer" aria-hidden="true"></i>
          </div>
        </section>
        <section className="relative h-screen">
          <video className="absolute h-full w-full object-cover" autoPlay muted loop>
            <source src="/videos/final.mp4" type="video/mp4" />
            Video cant be played
          </video>
          <div className="inset-0 bg-hitam opacity-75 absolute">
          </div>
          <div className="absolute top-0 left-0 right-0 p-24 flex flex-col justify-center items-start h-full gap-12">
            <div className="font-lato font-bold text-abuabu text-6xl leading-loose">
              Efficiency Value.<br />Make it simple and practical.<br />Positive Transactional.
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center my-8">
          <div><Link href="/custom-order" passHref><button className="p-4 bg-hijau-tua text-abuabu text-4xl rounded-lg">Custom Order</button></Link></div>
        </section>
        <section className="flex flex-col items-center justify-center p-4 gap-4">
          <div className="text-hijau-tua font-bold text-2xl">
            Kategori
          </div>
          <div className="flex gap-4">
            <div className="relative bg-putih w-[300px] h-[200px]">
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]">
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]">
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
            <div className="relative bg-putih w-[300px] h-[200px]">
              <img className="absolute" src="https://picsum.photos/300/200" alt="foto" />
              <div className="absolute w-full h-full bg-hitam bg-opacity-50"></div>
              <div className="absolute w-full h-full text-abuabu flex items-center justify-center">Kategori</div>
            </div>
          </div>
        </section>
        <section id="faqsection" className="relative flex flex-col items-center justify-center gap-4">
          <div className="uppercase font-bold text-hijau-tua text-xl">faq</div>
          <FaqAccordion
            title="Apa keunggulan menggunakan Freelance Sigap?"
            description="Kami memegang erat pada konsep efisiensi waktu dan harga. Selain itu profesionalitas freelancer dijunjung tinggi dan kami bertekad untuk menghadirkan fitur custom order untuk memberi ruang kepada freelancer kelas newbie untuk menjemput order calon customer juga kepada customer untuk bebas menentukan budget di fitur ini."
          />
          <FaqAccordion
            title="Ada berapa cara order di Freelance Sigap?"
            description="Terdapat 2 cara order, yakni Instan Order dan Custom Order."
          />
          <FaqAccordion
            title="Bagaimana cara order di Freelance Sigap?"
            description="1. Pada Instan Order, calon customer harus melakukan login atau sign up terlebih dahulu, kemudian nanti mengisi e-formulir yang sudah tersedia, harga jasa menyesuaikan jenis jasa, kualitas atau kelas freelancer, dan kecepatan pengerjaan. 
2. Pada Custom Order, calon customer tidak perlu login atau signup terlebih dahulu, dan calon customer bebas menentukan budget untuk membayar jasa freelancer."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap terdapat fitur negosiasi?"
            description="Ya, fitur tersebut bernama Chat and Nego."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap dapat mencicil?"
            description="Ya, ada metode pembayaran mencicil sebanyak 2 kali. Termin 1 membayar sebesar minimal 20%. Termin 2 membayar sisa dari pembayaran termin 1. Metode pembayaran ini berlaku untuk custom order saja."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap dapat CoD?"
            description="Ya, ada metode pembayaran Cash on Delivery untuk calon customer yang tidak memiliki E-Wallet/Bank/Debit dan dapat dijangkau jaraknya. Untuk Cash on Delivery terdapat biaya penanganan sebesar Rp 5.000."
          />
          <FaqAccordion
            title="Bagaimana ketentuan transaksi di Freelance Sigap?"
            description="Calon customer harus memperhatikan syarat dan ketentuan order yang tertera pada Terms and Condition sebelum melakukan order. Semua bentuk persetujuan dari calon customer dianggap sebagai hal yang absah. Terkait kebijakan pembatalan order dari calon customer merupakan tanggung jawab dari calon customer, jika sebaliknya di tengah proyek berjalan dari pihak freelancer terdapat keterlambatan, maka calon customer dapat mengklaim garansi berupa uang kembali 100% atau proyek dialihkan kepada freelancer lain."
          />
          <FaqAccordion
            title="Bagaimana cara klaim garansi?"
            description="Calon customer harus melakukan login atau signup terlebih dahulu. Di sebelah profile calon customer terdapat My Claim dan di sana akan diarahkan kepada support center untuk teknis klaim. Jika calon customer tidak membuat akun, maka klaim garansi tidak berlaku kecuali memiliki rekam jejak transaksi."
          />
          <FaqAccordion
            title="Apakah di Freelance Sigap terdapat voucher diskon?"
            description="Ya. Voucher diskon didapatkan dari mengisi review feedback setelah order dan event-event Freelance Sigap."
          />
          <FaqAccordion
            title="Bagaimana cara klaim voucher diskon?"
            description="Calon customer dapat mengklaim voucher diskon di My Claim, kemudian voucher dapat digunakan sesuai dengan ketentuannya."
          />
          <FaqAccordion
            title="Bagaimana jika ingin menambah fitur atau request di tengah proyek?"
            description="Jika terdapat request di tengah berjalannya proyek, hal tersebut diukur oleh bobot permintaan. Jika permintaannya dalam kategori besar, dimungkinkan freelancer akan memberi tagihan pembayaran tambahan. Jika permintaannya hanya sebagian kecil, dimungkinkan freelancer memberi free paid."
          />
          <FaqAccordion
            title="Berapa harga untuk membeli jasa di Freelance Sigap?"
            description="Rate harga di Freelance Sigap mulai dari Rp 15.000"
          />
          <FaqAccordion
            title="Berapa lama proyek yang dikerjakan di Freelance Sigap?"
            description="Pengerjaan proyek tergantung pada jenis dan sub jenis jasa serta pemilihan fitur kecepatan pengerjaan, apabila Sigap merupakan fitur pengerjaan reguler, dan Super Sigap merupakan fitur pengerjaan cepat."
          />
          <FaqAccordion
            title="Apakah menambah permintaan revisi menambah biaya di Freelance Sigap?"
            description="Ya, biaya revisi dihitung Rp 20.000/permintaan."
          />
          <FaqAccordion
            title="Apa yang didapat setelah proyek selesai?"
            description="Calon customer akan mendapatkan voucher diskon, juga customer memiliki tingkatan customer yang dimana akan mempengaruhi harga dan cashback pembelian jasa."
          />
        </section>
        <section className="h-32 p-16 min-h-screen flex flex-col justify-center items-center">
          <div className="text-hijau-tua text-5xl font-bold">Stand With Local</div>
          <div className="grow flex items-center justify-center">
            <div className="bg-hijau-tua text-putih px-20 p-8 rounded-lg text-4xl uppercase text-center">
              Maintenance<br />Social Networking
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
