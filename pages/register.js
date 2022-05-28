import { useRouter } from "next/router"
import Link from "next/link";
import { SignUp } from "../lib/firebase"
import { useState } from "react";
import swal from "sweetalert";

export default function Register() {
  const router = useRouter()

  const [models, setModels] = useState({
    email:''
  })

  const handleRegister = (e) => {
    e.preventDefault()
    SignUp(models.email,"123456")
    .then(() => {
      swal({
        title: "Daftar Berhasil",
        text: "Silahkan Login",
        icon: "success",
      }).then(() => {
        router.push('/login')
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleModels = (e) => {
    setModels({...models, [e.target.id]:e.target.value})
  }

  return (
    <>
      <div className="flex w-screen items-center justify-center py-12">
        <div className="shadow-2xl flex flex-col items-center p-8 gap-4 w-[400px]">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-8" src="/images/logogram.png" alt="logogram" />
            <div className="capitalize font-lato"><span className="font-extrabold text-sigap-ijo">freelance</span> <span className="font-bold">sigap</span></div>
          </div>

          <div className="font-bold self-start text-2xl mt-4">
            Daftar
          </div>

          <div className="border-2 border-gray-400 rounded-full w-full text-center px-8 py-3">Lanjutkan dengan Facebook</div>
          <div className="border-2 border-gray-400 rounded-full w-full text-center px-8 py-3">Lanjutkan dengan Google</div>

          <div className="grid grid-cols-3 w-full">
            <div className="flex items-center justify-center"><div className="border-[1px] border-gray-300 w-full"></div></div>
            <div className="flex items-center justify-center text-gray-400">atau</div>
            <div className="flex items-center justify-center"><div className="border-[1px] border-gray-300 w-full"></div></div>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="capitalize font-bold">informasi akun</div>
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="text" placeholder="Username" />
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="text" placeholder="Nama Depan" />
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="text" placeholder="Nama Belakang" />
            <input onChange={handleModels} id="email" value={models.email} className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="text" placeholder="Alamat Email" />
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="password" placeholder="Password" />
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="password" placeholder="Konfirmasi Password" />
            <div className="capitalize font-bold">kontak informasi</div>
            <input className="border-2 border-sigap-abu rounded-full w-full px-4 py-1" type="number" placeholder="Nomor Ponsel" />
          </div>

          <div className="w-full"><button className="bg-sigap-ijo text-white text-xl rounded-full w-full px-8 py-3" onClick={handleRegister}>Daftar</button></div>
          <div className="text-sigap-abu">Sudah memiliki akun? <Link href="/login" passHref><a className="text-sigap-ijo">Masuk</a></Link></div>
        </div>
      </div>

    </>
  )
}