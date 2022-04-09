import Image from "next/image"
import Link from "next/link";

function HeadNav(props) {
  const warnaBg = props.warnaBg
  return (
    <header className={`flex flex-row w-screen p-6 gap-x-72 fixed top-0 ${warnaBg} shadow-lg z-50`}>
      <Link href='/' passHref>
        <div className="logo cursor-pointer">
          <Image src="/images/logogram.png" width={50} height={50} alt='logogram' />
        </div>
      </Link>
      <nav className="flex flex-row uppercase text-hijau-black font-normal items-center text-2xl gap-x-16">
        <Link href='/dashboard' passHref>
          <div className="nav-link text-putih font-bold bg-hijau-tua px-6 py-2 rounded-md cursor-pointer">home</div>
        </Link>
        <div className="nav-link cursor-pointer">about</div>
        <div className="nav-link cursor-pointer">support center</div>
        <div className="nav-link cursor-pointer">terms and conditions</div>
      </nav>
    </header>
  )
}

export default HeadNav