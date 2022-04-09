import { gsap } from "gsap";
import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useEffect } from "react";
import Link from "next/link";
import swal from "sweetalert"

function Login() {
  const router = useRouter()
  const formRef = useRef()
  const titleRef = useRef()
  const subTitleRef = useRef()
  const logoRef = useRef()
  const backRef = useRef()
  const timeline = gsap.timeline({ defaults: { duration: 1, opacity: 0 } })

  useEffect(() => {
    timeline
      .from(formRef.current, { x: '-100%' })
      .from(titleRef.current, { x: '-50%' }, '<.5')
      .from(subTitleRef.current, { x: '-50%' }, '<.25')
      .from(logoRef.current, { x: '+100%' }, '<.5')
      .from(backRef.current, { x: '+100%' }, '<.5')
  }, [timeline])

  const handleLogin = (e) => {
    e.preventDefault()
    swal({
      title: "Login Berhasil",
      text: "Selamat Datang {pengguna}",
      icon: "success",
    }).then(() => {
      router.push('/dashboard')
    })
  }
  return (
    <>
      <div className="bg-abuabu min-h-screen font-lato">
        <div className="flex flex-row min-h-screen items-center">
          <form ref={formRef} onSubmit={handleLogin} className="w-[700px] px-14 py-24 self-stretch">
            <div className="bg-hijau-tua rounded-3xl text-putih p-12 h-full flex flex-col justify-between">
              <div>I - DEPTHRIVE | Stand With Local</div>
              <div className="font-bold text-2xl">Telah memiliki 500 juta pengguna di seluruh Dunia (contohnya)</div>
              <div className="flex flex-col gap-8">
                <div>
                  <button type="button" className="py-2 px-4 flex justify-center items-center bg-merah hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                      </path>
                    </svg>
                    Sign in with Google
                  </button>
                </div>
                <div className="flex flex-row border-hijau-black border-2 rounded-lg ">
                  <span className="w-16 p-3 text-center"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></span>
                  <input className="bg-hijau-tua grow focus:outline-none text-xl" type="text" name="" id="" placeholder="" />
                </div>
                <div className="flex flex-row border-hijau-black border-2 bg-hijau-dark rounded-lg ">
                  <span className="w-16 p-3 text-center"><i className="fa fa-user-o fa-2x" aria-hidden="true"></i></span>
                  <input className="bg-hijau-dark grow focus:outline-none text-xl" type="text" name="" id="" />
                </div>
                <div className="flex flex-row border-hijau-black border-2 rounded-lg ">
                  <span className="w-16 p-3 text-center"><i className="fa fa-lock fa-2x" aria-hidden="true"></i></span>
                  <input className="bg-hijau-tua grow focus:outline-none text-xl" type="password" name="" id="" />
                </div>
                <div>
                  <input type="checkbox" name="agree" id="agree" />
                  <label htmlFor="agree">Saya Menyetujui Syarat dan Ketentuan yang Berlaku</label>
                </div>
              </div>
              <button type="submit" className="uppercase bg-hijau-dark w-full p-4 rounded-xl font-bold text-2xl text-abuabu hover:text-putih">
                masuk
              </button>
              <div>
                Tidak Memiliki Akun? <span className="text-biru cursor-pointer">Buat Akun</span>
              </div>
            </div>
          </form>
          <div className="grow h-screen py-24 pr-20 flex flex-col justify-between">
            <Link href='/' passHref>
              <div ref={backRef} className="self-end pb-12 cursor-pointer font-bold text-hijau-tua">
                <i className="fa fa-home fa-2x" aria-hidden="true"></i> Kembali ke Beranda
              </div>
            </Link>
            <div className="grow">
              <div ref={titleRef} className="uppercase text-hijau-tua text-7xl font-extrabold">freelance sigap</div>
              <div ref={subTitleRef} className="text-hijau-tua text-6xl italic">Stand With Local</div>
            </div>
            <div ref={logoRef} className="self-end">
              <Image src="/images/logogram.png" width={500} height={500} alt='logogram'></Image>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="min-h-screen bg-abuabu flex items-center justify-center">
    //     <div className="flex justify-between flex-col h-[80vh] mx-4 md:mx-12 w-full max-w-md px-4 py-8 bg-emerald-700 rounded-[30px] shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    //       <div className="self-center mb-6 text-xl font-medium text-teal-50 sm:text-2xl dark:text-white">
    //         Telah memiliki 500 juta pengguna di seluruh Dunia
    //       </div>
    //       <div className="mt-8">
    //         <button onClick={handleLogin} type="button" className="py-3 px-4 mb-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    //           <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
    //             </path>
    //           </svg>
    //           Google
    //         </button>
    //         <form onSubmit={handleLogin} autoComplete="off">
    //           <div className="flex flex-col mb-2">
    //             <div className="flex relative ">
    //               <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-emerald-900 border-l border-b  border-gray-300 text-white shadow-sm text-sm">
    //                 <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    //                   <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
    //                   </path>
    //                 </svg>
    //               </span>
    //               <input type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-emerald-900 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
    //             </div>
    //           </div>
    //           <div className="flex flex-col mb-6">
    //             <div className="flex relative ">
    //               <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-emerald-900 border-l border-b  border-gray-300 text-white shadow-sm text-sm">
    //                 <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    //                   <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
    //                   </path>
    //                 </svg>
    //               </span>
    //               <input type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-emerald-900 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
    //             </div>
    //           </div>
    //           <div className="flex items-center mb-6 -mt-4">
    //             <div className="flex ml-auto">
    //               <a href="#" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
    //                 Lupa Password
    //               </a>
    //             </div>
    //           </div>
    //           <div className="flex w-full">
    //             <button type="submit" className="uppercase py-2 px-4  bg-teal-800 hover:bg-teal-900 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    //               masuk
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="flex items-center justify-center mt-6">
    //         <a href="#" target="_blank" className="inline-flex items-center text-xs font-thin text-center text-white hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
    //           <span className="ml-2">
    //             Tidak Punya Akun?
    //           </span>
    //         </a>
    //         <span className="ml-4 mr-2 inline-flex items-center text-xs font-thin text-center text-white dark:text-gray-100 dark:hover:text-white cursor-default">
    //           |
    //         </span>
    //         <a onClick={() => { router.push('/') }} className="cursor-pointer inline-flex items-center text-xs font-thin text-center text-white hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
    //           <span className="ml-2">
    //             Kembali ke Homepage
    //           </span>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="hidden h-screen p-24 grow lg:block">
    //       <div className="flex h-full flex-col justify-between">
    //         <div className="self-end font-semibold">
    //           Kembali ke Beranda
    //         </div>
    //         <div className="grow">
    //           <h1 className="font-bold text-teal-700 text-6xl">FREELANCE SIGAP</h1>
    //           <h2 className="italic text-teal-800 text-4xl">Stand With Local</h2>
    //         </div>
    //         <div className="self-end">
    //           <Image src="/images/logogram.png" width={400} height={400} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

export default Login