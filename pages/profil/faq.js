import Sidebar from "../../components/Sidebar";
import FaqAccordion from "../../components/FaqAccordion";
import Link from "next/link";

export default function Profil() {
  return (<>
    <Sidebar/>
      <div className="ml-72 p-8 flex flex-col gap-4">
      <FaqAccordion title="Apa manfaat mengisi lengkap biodata akun pada profile?" description="Kami memiliki komit untuk tingkatan loyalitas kepada customer dengan memberi label tingkatan yang menggambatkan keloyalitasan."/>
      <FaqAccordion title="Apa saja tingkatan loyalitas customer?" description="Silver, Gold, Platinum"/>
      <FaqAccordion title="Apa manfaat tingkatan loyalitas customer?" description="Mendapat posisi strategis pada pembagian voucher diskon atau point."/>
      <FaqAccordion title="Bagaimana jika saya lupa password?" description="Kamu dapat lakukan pengaturan ulang Reset Password dan kemudian masukkan alamat email kamu dengan benar, kemudian kode verifikasi akan dikirimkan ke email kamu."/>
      <FaqAccordion title="Bagaimana cara saya mengubah password?" description="Kamu dapat mengubah password langsung pada bagian profile dan ubah password."/>
      <FaqAccordion title="Apakah boleh mengganti alamat email?" description="Ya. Pastikan alamat email yang kamu ganti adalah alamat email yang aktif."/>
      <FaqAccordion title="Bagaimana jika saya lupa alamat email atau alamat email di-non-aktifkan, dan nomor telepon tidak aktif?" description="Kamu dapat menghubungi Tim Sigap melalui kanal customer service-nya Freelance Sigap."/>
      <FaqAccordion title="Apakah akun saya dapat ditangguhkan atau dihapus permanent oleh Freelance Sigap?" description={["Ya. Jika kamu melanggar norma yang ditetapkan oleh Freelance Sigap pada bagian klik", <Link key={1} href="/tos" passHref><span className="text-sigap-ijo font-semibold cursor-pointer">&nbsp;S&K&nbsp;</span></Link> ,"disini yang tertera."]}/>
      <FaqAccordion title="title" description="desc"/>
    </div>
  </>)
}