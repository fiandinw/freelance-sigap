import Image from "next/image"
import Link from "next/link";

function HeadNav(props) {
  return (
    props.type === 'landing' ? (
      // px di header menentukan layout keselruhan
      <header className="fixed top-0 w-screen z-50 px-16 2xl:px-32 py-8">
        <nav className="bg-white flex flex-row items-center justify-between rounded-full px-4 py-2 shadow-lg">

          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-8" src="/images/logogram.png" alt="logogram" />
            <div className="capitalize font-lato"><span className="font-extrabold text-sigap-ijo">freelance</span> <span className="font-bold">sigap</span></div>
          </div>

          <div className="flex items-center gap-8">
            <div className="capitalize font-bold cursor-pointer">home</div>
            <div className="capitalize cursor-pointer">about</div>
            <div className="uppercase cursor-pointer"><a href="#faqsection">faq</a></div>
            <div className="capitalize cursor-pointer">description</div>
            <div className="capitalize cursor-pointer">support center</div>
            <div className="capitalize cursor-pointer">terms and conditions</div>
          </div>

          <div className="flex items-center gap-2">
            <Link href='/login' passHref>
              <div className="cursor-pointer w-20 text-center font-semibold uppercase">sign in</div>
            </Link>
            <Link href='/login' passHref>
              <div className="cursor-pointer w-20 py-1 bg-sigap-ijo text-center text-white font-bold uppercase rounded-full">join</div>
            </Link>
          </div>

        </nav>
      </header>
    ) : (
      <header className="fixed top-0 w-screen z-50 bg-white">
        <div className="flex flex-row justify-between py-8 px-24 2xl:px-32">
          <Link href="/" passHref>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <img className="w-8 h-8" src="/images/logogram.png" alt="logogram" />
              <div className="font-lato font-extrabold"><span className="text-sigap-ijo">Freelance</span> Sigap</div>
            </div>
          </Link>
          <div className="flex items-center">search</div>
          <div className="flex flex-row gap-8 font-lato items-center">
            <div className="font-bold">Home</div>
            <div>Price List</div>
            <div>My List</div>
            <div>My Order</div>
            <div>My Claim</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div><i className="fa fa-bell fa-lg text-sigap-ijo" aria-hidden="true"></i></div>
            <div><i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></div>
          </div>
        </div>
        <div className="border-y-2 w-screen px-16 2xl:px-32 py-2 flex flex-row justify-between">
          <div>Category</div>
          <div>Category</div>
          <div>Category</div>
          <div>Category</div>
          <div>Category</div>
          <div>Category</div>
          <div>Category</div>
        </div>
      </header>
    )
  )
}

// function HeadNav(props) {
//   const warnaBg = props.warnaBg
//   return (
//     <header className={`flex flex-row w-screen px-8 py-2 justify-between fixed top-0 ${warnaBg} shadow-lg z-50`}>
//       <Link href='/' passHref>
//         <div className="logo cursor-pointer shrink-0">
//           <Image src="/images/logogram.png" width={50} height={50} alt='logogram' />
//         </div>
//       </Link>
//       <nav className="flex flex-row uppercase text-hijau-black font-normal items-center gap-x-16 shrink-0">
//         <Link href='/dashboard' passHref>
//           <div className="nav-link text-putih font-bold bg-hijau-tua px-6 py-2 rounded-md cursor-pointer">home</div>
//         </Link>
//         <Link href="/about" passHref>
//           <div className="nav-link cursor-pointer">about</div>
//         </Link>
//         <a href="#faqsection">
//           <div className="nav-link cursor-pointer">faq</div>
//         </a>
//         <Link href="/support-center" passHref>
//           <div className="nav-link cursor-pointer">support center</div>
//         </Link>
//         <Link href="/tos" passHref>
//           <div className="nav-link cursor-pointer">terms and conditions</div>
//         </Link>
//       </nav>
//       {!props.login ? (
//         <Link href="/login" passHref>
//           <div className="flex flex-row uppercase items-center cursor-pointer shrink-0">
//             <div className="bg-hijau-tua border-hijau-tua border-2 px-6 py-2 flex items-center justify-center rounded-l-lg text-putih">sign in</div>
//             <div className="border-2 border-hijau-tua px-6 py-2 flex items-center justify-center rounded-r-lg text-hijau-tua">sign up</div>
//           </div>
//         </Link>
//       ) : (
//         <div className="flex flex-row uppercase items-center cursor-pointer shrink-0 gap-6">
//           <div title="My List"><i className="fa fa-list fa-lg" aria-hidden="true"></i></div>
//           <div title="My Order"><i className="fa fa-sticky-note fa-lg" aria-hidden="true"></i></div>
//           <div title="Notification"><i className="fa fa-bell-ringing-o fa-lg" aria-hidden="true"></i></div>
//         </div>
//       )}
//     </header>
//   )
// }

export default HeadNav