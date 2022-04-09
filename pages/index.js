import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";

export default function Home() {
  const sigapbotref = useRef()

  useEffect(() => {
    gsap.to(sigapbotref.current, { y: '-30', repeat: '-1', duration: 1, yoyoEase: true })
  })

  return (
    <>
      <div className="bg-gradient-to-br from-putih to-hijau-muda min-h-screen font-lato">
        <HeadNav warnaBg='bg-putih' />
        <main className="">
          <section className="min-h-screen pt-24">
            <div className="italic text-4xl text-hijau-tua mx-auto w-fit mt-24 mb-8 font-bold">Stand With Local</div>
            <div className="bg-hitam text-putih flex flex-row justify-between">
              <div className="p-12 shrink w-7/12 flex justify-between flex-col">
                <div className="font-semibold text-7xl leading-snug font-montserrat">Find the perfect <span className="italic text-hijau-muda">freelance</span> services for your business</div>
                <Link href='/login' passHref>
                  <div className="uppercase bg-hijau-tua font-semibold text-abuabu text-4xl w-fit px-14 py-3 rounded-lg cursor-pointer hover:text-putih">join now</div>
                </Link>
              </div>
              <div ref={sigapbotref}>
                <Image src="/images/Sigapbot3.png" width={450} height={450} alt='sigapbot' />
              </div>
            </div>
            <div className="flex flex-row gap-8 text-hijau-black mt-24 p-16">
              <i className="fa fa-facebook-square fa-3x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-twitter-square fa-3x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-whatsapp fa-3x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-instagram fa-3x cursor-pointer" aria-hidden="true"></i>
            </div>
          </section>
          <section className="relative h-screen">
            <video className="absolute h-full w-full object-cover" autoPlay muted loop>
              <source src="/videos/upwork.mp4" type="video/mp4" />
              Video cant be played
            </video>
            <div className="inset-0 bg-hitam opacity-75 absolute">
            </div>
            <div className="absolute top-0 left-0 right-0 p-64 flex flex-col justify-center items-center h-full gap-12">
              <div className="bg-hijau-tua text-putih px-4 py-2 uppercase font-bold text-3xl">freelance sigap</div>
              <div className=" text-abuabu text-2xl text-justify font-opensans">Freelance Sigap merupakan Startup Entrepreneurship Technology yang bergerak pada bidang pelayanan jasa multimedia dan produk kreatif, kepenulisan dan penerjemahan serta permasalahan teknis dan non-teknis rumah. Jasa yang terdaftar diintegrasikan ke teknologi. Semua itu dengan tujuan mengaktivasi fungsi Freelance Sigap sebagai startup yang mengusung nilai efisiensi. Freelance Sigap hadir untuk menyederhanakan dan mempraktiskan kerja serta kebutuhan zaman. Di samping itu, sistem yang ditawarkan memprioritaskan kenyamanan dan kepuasan konsumen serta memberi kelayakan kepada pekerja kreatif. Hal ini dimunculkan untuk membuat lingkup positif dalam transaksional.</div>
            </div>
          </section>
          <section className="h-32 p-16 min-h-screen flex flex-col justify-center items-center">
            <div className="text-hijau-tua text-5xl font-bold">Stand With Local</div>
            <div className="grow flex items-center justify-center">
              <div className="bg-hijau-tua text-putih px-20 p-8 rounded-lg text-4xl uppercase text-center">
                Maintenance<br />Social Networking
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
    // <div className="bg-indigo-900 relative overflow-hidden h-screen">
    //   <video className="absolute h-full w-full object-cover" autoPlay muted loop>
    //     <source src="/videos/upwork.mp4" type="video/mp4" />
    //     Video can't be played
    //   </video>
    //   <div className="inset-0 bg-black opacity-25 absolute">
    //   </div>
    //   <header className="absolute top-0 left-0 right-0 z-20">
    //     <nav className="container mx-auto px-6 md:px-12 py-4">
    //       <div className="md:flex justify-between items-center">
    //         <div className="flex justify-between items-center">
    //           <a href="#" className="text-white">
    //             <svg className="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
    //               <defs>
    //               </defs>
    //               <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
    //               </path>
    //               <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
    //               </path>
    //             </svg>
    //           </a>
    //           <div className="md:hidden">
    //             <button className="text-white focus:outline-none">
    //               <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    //                 </path>
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="hidden md:flex items-center">
    //           <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
    //             About us
    //           </a>
    //           <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
    //             Career
    //           </a>
    //           <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
    //             Contact us
    //           </a>
    //         </div>
    //       </div>
    //     </nav>
    //   </header>
    //   <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
    //     <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
    //       <span className="font-bold uppercase text-yellow-400">
    //         Hello There!
    //       </span>
    //       <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
    //         Freelance Sigap
    //       </h1>
    //       <Link href='/login'>
    //         <div className="cursor-pointer block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">

    //           Get Started

    //         </div>
    //       </Link>
    //       <div ref={sigapbotref}>
    //         <Image src="/images/Sigapbot1.png" width={500} height={500} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
