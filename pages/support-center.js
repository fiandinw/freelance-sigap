import Footer from "../components/Footer"
import HeadNav from "../components/HeadNav"
import Link from "next/link";

function Products() {
  return (
    <div className="bg-abuabu min-h-screen font-lato">
      <HeadNav type="landing"/>
      <main className="pt-32 pb-32 px-8 flex flex-col min-h-screen gap-8">
        <h1>Support Center</h1>
        <p>support@freelancesigap.com</p>
      </main>
      <Footer />
    </div>
  )
}

export default Products