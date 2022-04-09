import Image from "next/image"

function Footer() {
  return (
    <footer className="bg-hijau-med text-hijau-black px-16 py-8 flex flex-row justify-between">
      <div className="grow-0">
        <div className="font-montserrat">
          <div className="font-bold text-4xl uppercase">Freelance</div>
          <div className="font-bold text-4xl uppercase text-putih">Sigap</div>
        </div>
        <div>Freelance Sigap is the worlds leading community<br />for creatives to share, grow, and get hired.</div>
        <div>
          <div className="flex flex-row gap-2 text-hijau-black">
            <i className="fa fa-facebook-square fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-twitter-square fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-whatsapp fa-2x cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-2x cursor-pointer" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div>Categories</div>
        <div>Information</div>
        <div>Services</div>
        <div>Online Store</div>
      </div>
      <div>
        Contact Us <br />
        Phone: 082123456789 <br />
        Email: admin@freelancesigap.com
      </div>
      <div>
        <div>Subscribe for More Info</div>
        <div><input className="p-2 rounded-md" type="text" name="subs" id="subs" placeholder="Enter Your Email"/></div>
        <div><button className="bg-hijau-dark px-8 py-2 mt-2 text-putih">Subscribe</button></div>
      </div>
    </footer>
  )
}

export default Footer