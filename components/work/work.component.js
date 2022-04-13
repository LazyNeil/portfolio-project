function WorkComponent({ title, description, image, link = "#", datetime, type = "Application" }) {
    let timestamp = datetime ? new Date(datetime) : new Date();
    let year = timestamp.getFullYear().toString();
    return (
        <section className="w-full border-b-2 py-4">
            <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:h-32">
                <a className="block h-auto w-full lg:w-48 flex-none bg-cover" href={link}>
                    <img className="rounded" src="/tmp/project_sample.png" alt={description} />
                </a>
                <div className="flex flex-col justify-evenly lg:px-4">
                    <a href={link}>
                        <h2 className="text-xl py-2 lg:py-0">{title || "Great title here"}</h2>
                    </a>
                    <span className="py-2">
                        <time datetime={datetime}>
                            <strong className="bg-blue-800 text-neutral-50 rounded-full px-2">{year}</strong>
                        </time>
                        <em className="text-gray-500 pl-2">{type}</em>
                    </span>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WorkComponent;