import Image from "next/image"

function Footer() {
  return (
    <footer className="bg-white px-16 py-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-lato font-extrabold">
            <span className="text-4xl text-sigap-ijo">Freelance</span>
            <span className="text-4xl"> Sigap</span>
          </div>
          <div>Powerful Freelance Marketplace System with ability to change the Users</div>
          <div>
            <div className="flex flex-row gap-2 text-hijau-black">
              <i className="fa fa-facebook-square fa-2x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-twitter-square fa-2x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-whatsapp fa-2x cursor-pointer" aria-hidden="true"></i>
              <i className="fa fa-instagram fa-2x cursor-pointer" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="font-lato font-bold text-2xl">For Clients</div>
          <div>
            <ul>
              <li>Find Freelancers</li>
              <li>Post Project</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="font-lato font-bold text-2xl">For Freelancers</div>
          <div>
            <ul>
              <li>Find Work</li>
              <li>Create Account</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="font-lato font-bold text-2xl">Call Us</div>
          <div>
            <ul>
              <li><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> Cibiru</li>
              <li><i className="fa fa-phone fa-2x" aria-hidden="true"></i> 085159596077</li>
              <li><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i> freelancesigap@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-12">
        2022 Freelancesigap. All rights reserved
      </div>
    </footer>
  )
}

export default Footer