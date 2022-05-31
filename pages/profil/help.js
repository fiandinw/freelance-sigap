import Sidebar from "../../components/Sidebar";

export default function Profil() {
  return (<>
    <Sidebar />
    <div className="ml-72 p-8">
      <a href="https://api.whatsapp.com/send?phone=628123456789&text=Halo%20Saya%20Mau%20order" target="_blank" rel="noreferrer">
        <div className="bg-sigap-ijo text-white w-fit flex flex-col items-center justify-center p-8 gap-4">
          <i className="fa fa-whatsapp fa-4x" aria-hidden="true"></i>
          <div>WhatsApp Support Center</div>
        </div>
      </a>
    </div>
  </>)
}