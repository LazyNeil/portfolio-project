import Head from 'next/head'
import MenuComponent from '../components/menu/menu.component'
import FooterComponent from '../components/footer/footer.component'
import BlogComponent from '../components/blog/blog.component'
import WorkComponent from '../components/work/work.component'
import HeroComponent from '../components/hero/hero.component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Carol</title>
        <meta name="description" content="Jonathan Carol Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuComponent />
      <main>
        <header className="px-4 w-full md:px-32">
          <HeroComponent />
        </header>

        <section className='bg-blue-200 p-4 md:px-32'>
          <p className='w-full flex justify-between font-semibold pb-4'>Blog entries <a className='text-blue-700' href='#'>View All</a></p>
          <div className='grid grid-rows-1 md:grid-cols-2 gap-4'>
            <BlogComponent />
            <BlogComponent />
          </div>
        </section>

        <section className='p-4 md:px-32'>
          <p className='font-semibold block pb-4'>Works</p>
          <div className='m-auto flex flex-col items-center'>
            <WorkComponent />
            <WorkComponent />
            <WorkComponent />
            <WorkComponent />
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  )
}
