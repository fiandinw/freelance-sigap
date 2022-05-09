import Footer from "../../components/Footer";
import HeadNav from "../../components/HeadNav";
import { useRouter } from 'next/router'

function Deskripsi () {
  const router = useRouter()
  const { id } = router.query
  return(
    <>
      <HeadNav />
      <main className="pt-48 pb-32 px-28 2xl:px-32">
        {id}
      </main>
      <Footer />
    </>
  )
}

export default Deskripsi