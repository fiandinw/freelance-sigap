import Image from "next/image"
import Link from "next/link";

function HeadNav(props) {
  const warnaBg = props.warnaBg
  return (
    <header className={`flex flex-row w-screen px-8 py-2 justify-between fixed top-0 ${warnaBg} shadow-lg z-50`}>
      <Link href='/' passHref>
        <div className="logo cursor-pointer shrink-0">
          <Image src="/images/logogram.png" width={50} height={50} alt='logogram' />
        </div>
      </Link>
      <nav className="flex flex-row uppercase text-hijau-black font-normal items-center gap-x-16 shrink-0">
        <Link href='/dashboard' passHref>
          <div className="nav-link text-putih font-bold bg-hijau-tua px-6 py-2 rounded-md cursor-pointer">home</div>
        </Link>
        <Link href="/about" passHref>
          <div className="nav-link cursor-pointer">about</div>
        </Link>
        <Link href="/support-center" passHref>
          <div className="nav-link cursor-pointer">support center</div>
        </Link>
        <Link href="/tos" passHref>
          <div className="nav-link cursor-pointer">terms and conditions</div>
        </Link>
      </nav>
      {!props.login ? (
        <Link href="/login" passHref>
          <div className="flex flex-row uppercase items-center cursor-pointer shrink-0">
            <div className="bg-hijau-tua border-hijau-tua border-2 px-6 py-2 flex items-center justify-center rounded-l-lg text-putih">sign in</div>
            <div className="border-2 border-hijau-tua px-6 py-2 flex items-center justify-center rounded-r-lg text-hijau-tua">sign up</div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-row uppercase items-center cursor-pointer shrink-0 gap-6">
          <div title="My List"><i className="fa fa-list fa-lg" aria-hidden="true"></i></div>
          <div title="My Order"><i className="fa fa-sticky-note fa-lg" aria-hidden="true"></i></div>
          <div title="Notification"><i className="fa fa-bell-ringing-o fa-lg" aria-hidden="true"></i></div>
        </div>
      )}
    </header>
  )
}

export default HeadNav