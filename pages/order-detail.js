import Footer from "../components/Footer";
import HeadNav from "../components/HeadNav";
import Sticky from "react-sticky-el";

export default function OrderDetail() {
  return (
    <>
      <HeadNav />
      <main className="pt-44 pb-32 px-28 2xl:px-32">
        <div>breadcrumb</div>

        <div className="flex flex-row">
          <div className="w-8/12"></div>
          <Sticky className="w-4/12 relative">
            <div className="shadow-lg flex flex-col p-4">
              <div className="font-semibold capitalize">rincian pembayaran</div>
            </div>
          </Sticky>
        </div>
      </main>
      <Footer />
    </>
  )
}