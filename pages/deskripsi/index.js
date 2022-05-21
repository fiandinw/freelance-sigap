import Footer from "../../components/Footer";
import HeadNav from "../../components/HeadNav";
import { useRouter } from 'next/router'
import Sticky from "react-sticky-el";

function Deskripsi() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <HeadNav />
      <main className="pt-44 pb-32 px-28 2xl:px-32 flex flex-col gap-8">
        <div className="">breadcrumb / {id}</div>

        <div className="w-full bg-black h-96 rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src="https://picsum.photos/500" alt="portfolio" />
        </div>

        <div className="text-sigap-ijo text-3xl uppercase">
          Judul Detail {id}
        </div>

        <div className="flex flex-row gap-8">
          <div className="w-8/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus similique commodi repellendus iste nobis neque, ex culpa pariatur quam est accusantium sequi deleniti placeat rerum temporibus autem quaerat esse incidunt. Excepturi repudiandae ab fugiat laborum perspiciatis natus! Eum nulla quasi error accusantium quisquam voluptates in quidem, dolore, praesentium, porro necessitatibus excepturi non. Soluta ullam perferendis officia cupiditate vero veniam repellendus accusantium ipsum? Ipsum accusantium dicta voluptates omnis qui impedit tempore, voluptatibus odit inventore quod consectetur libero asperiores beatae nostrum tempora eum, nemo facere? Odit suscipit doloribus sint sapiente repellendus numquam quasi. Eaque inventore labore necessitatibus ratione quam repellendus nisi.</div>
          <Sticky className="w-4/12 relative">
            <div className="shadow-xl flex flex-col">
              <div className="grid grid-cols-3">
                <div className="flex py-6 font-semibold items-center justify-center border-b-4 border-sigap-ijo text-sigap-ijo">XXX Rb</div>
                <div className="flex py-6 font-semibold items-center justify-center bg-gray-400 text-white">XXX Rb</div>
                <div className="flex py-6 font-semibold items-center justify-center bg-gray-400 text-white">XXX Rb</div>
              </div>
              <div className="flex flex-col p-4 justify-between gap-4">
                <div>
                  <div className="uppercase font-semibold text-xl text-sigap-ijo">paket basic</div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempora fugit neque nesciunt eius, cupiditate consectetur accusamus nobis, natus architecto ut sint nihil delectus soluta atque, quidem dolorem voluptatem quas?</div>
                </div>
                <div>
                  <div className="flex flex-row justify-between">
                    <div className="font-semibold text-xl capitalize">waktu pengerjaan</div>
                    <div className="font-semibold text-xl text-sigap-ijo capitalize">X Hari</div>
                  </div>
                  <div className="border-[1px] border-gray-300 my-6"></div>
                  <div className="text-center">
                    <button className="capitalize bg-sigap-ijo text-white rounded-full w-full py-4 font-bold">chat & nego</button>
                    <div className="mt-2">Anda belum akan dikenakan biaya</div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </div>

        <div className="w-8/12">
          <div>Freelancer</div>
          <div className="w-full border-2 relative flex flex-col px-4 py-8 gap-8">
            <div className="absolute right-4 top-4"><button className="border-2 border-sigap-ijo text-sigap-ijo font-bold capitalize px-10 py-2">hubungi saya</button></div>
            <div className="w-full flex flex-row items-center">
              <div className="w-96 flex items-center justify-center">
                Foto
              </div>

              <div>
                <div className="font-bold capitalize">nama</div>
                <div>bintang</div>
                <div className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta qui, mollitia aliquid dolores laboriosam earum facere minima excepturi amet eum maxime adipisci aperiam dolore, magni, veniam esse quasi labore.</div>
              </div>
            </div>

            <div className="border-[1px] border-gray-300 mx-8"></div>

            <div className="flex flex-row items-center justify-evenly">
              <div className="flex flex-col items-center">
                <div className="capitalize">anggota sejak</div>
                <div className="font-semibold text-xl text-sigap-ijo">MM/YYYY</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="capitalize">penyelesaian</div>
                <div className="font-semibold text-xl text-sigap-ijo">XX%</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="capitalize">terjual</div>
                <div className="font-semibold text-xl text-sigap-ijo">X Kali</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="capitalize">respon</div>
                <div className="font-semibold text-xl text-sigap-ijo">X Jam</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-sigap-ijo text-3xl uppercase">
            ulasan
          </div>
          <div className="w-8/12 shadow-lg p-4">
            <div className="flex justify-between">
              <div className="flex flex-row items-center">
                <div className="w-24 flex items-center justify-center">foto</div>
                <div>
                  <div className="font-bold text-xl">Username</div>
                  <div>DD/MM/YYY</div>
                </div>
              </div>
              <div>bintang</div>
            </div>

            <div className="border-[1px] border-gray-300 mx-8 my-8"></div>

            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit distinctio reiciendis sint velit facilis, consequuntur explicabo tempora voluptatem quisquam tempore laborum doloremque quibusdam ea animi dolorum molestias consectetur repellat!</div>
          </div>

          <div className="w-8/12 flex justify-center"><button className="border-2 border-sigap-ijo text-sigap-ijo font-bold capitalize px-10 py-4">lihat semua</button></div>
        </div>

        <form className="self-center flex flex-col bg-gradient-to-br from-sigap-ijo to-white items-center w-screen p-24 gap-8" onSubmit={(e) => { e.preventDefault(); console.log('Success') }}>
          <div className="font-lato font-bold text-6xl">Newsletter Subscription</div>
          <div className="text-gray-500 text-2xl mb-12">Subscribe to our newsletter to get new freelance work and projects</div>
          <input className="rounded-full shadow-md px-32 py-4 text-2xl" type="text" placeholder="Enter your email address" />
          <button className="bg-sigap-ijo text-white font-bold text-2xl px-16 py-4 rounded-full" type="submit">Subscribe</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Deskripsi