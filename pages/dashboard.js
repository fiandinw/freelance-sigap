import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"
import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
function Dashboard() {
  return (
    <>
      <div className="bg-abuabu min-h-screen">
        <HeadNav warnaBg='bg-putih' />
        <main className="pt-48 pb-12 px-8 flex flex-row">
          <div className="w-56"></div>
          <div className="grow flex justify-center items-center flex-col gap-12">
            <div className="text-4xl uppercase font-bold text-hijau-dark">freelance sigap</div>
            <div className="flex flex-row gap-8">
              <div className="bg-putih w-96 text-putih rounded-lg border-2 border-hijau-med">
                <div className="bg-hijau-med text-center px-12 py-2 text-3xl uppercase font-semibold h-24">social networking</div>
                <div className="h-72 p-16 text-center">
                  <Image src='/images/icon-networking.png' width='200' height='200' alt="icon-networking"/>
                </div>
                <div className="p-4"><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">find freelancer</button></div>
              </div>
              <div className="bg-putih w-96 text-putih rounded-lg border-2 border-hijau-med">
                <div className="bg-hijau-med text-center px-12 py-2 text-3xl uppercase font-semibold h-24 flex items-center justify-center">form e-order</div>
                <div className="h-72 p-16 text-center">
                  <Image src='/images/icon-form.png' width='200' height='200' alt="icon-form"/>
                </div>
                <Link href='/order' passHref><div className="p-4"><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">make an order</button></div></Link>
              </div>
            </div>
          </div>
          <div className="self-end">
            <div className="bg-putih w-56 text-putih rounded-lg border-2 border-hijau-med">
              <div className="bg-hijau-med px-4 py-2 uppercase font-semibold h-12 flex items-center justify-center">check order status</div>
              <div className="h-36 p-8 text-center">
                <Image src='/images/icon-delivery-status.png' width='100' height='100' alt="icon-delivery"/>
              </div>
              <div className="p-4">
                <Link href='/status' passHref><button className="bg-hijau-med-dark w-full text-xl uppercase font-semibold p-2 rounded-lg">check</button></Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Dashboard