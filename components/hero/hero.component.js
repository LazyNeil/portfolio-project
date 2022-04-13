function HeroComponent() {
    return (
        <section className="">
            <div className="flex flex-col items-center justify-between md:flex-row-reverse">
                <img className="w-56 rounded-full" src="/tmp/avatar.jpg" alt="" />
                <div className="max-w-lg h-auto text-center md:text-left">
                    <span className="text-3xl font-bold py-4">
                        <h2>Hi, I'm Neil,</h2>
                        <h1>Full Stack Developer</h1>
                    </span>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
            <div className='py-4 text-center md:text-left'>
                <button className='bg-red-500 text-zinc-50 font-semibold rounded py-2 px-4'>Download resume</button>
            </div>
        </section>
    )
}

export default HeroComponent;