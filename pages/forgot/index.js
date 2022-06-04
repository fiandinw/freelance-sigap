import { useRouter } from "next/router"
import Link from "next/link";

function Login() {
  const router = useRouter()

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="shadow-2xl flex flex-col items-center p-8 gap-4 w-[400px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-8" src="/images/logogram.png" alt="logogram" />
            <Link href="/" passHref>
              <div className="capitalize font-lato"><span className="font-extrabold text-sigap-ijo">freelance</span> <span className="font-bold">sigap</span></div>
            </Link>
          </div>
          <div className="font-bold self-start text-2xl mt-4">
            Lupa Password
          </div>
          <div>Tolong masukan alamat e-mail kamu. 
kamu akan menerima sebuat link untuk
dapat membuat kata sandi baru</div>
          <div className="w-full"><input className="border-2 border-gray-400 rounded-full w-full px-8 py-3" type="text" placeholder="Masukan alamat e-mail" /></div>
          <Link href="/forgot/verify" passHref>
            <div className="w-full mt-16"><button className="bg-sigap-ijo text-white text-xl rounded-full w-full px-8 py-3">Kirim Kode Verifikasi</button></div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login