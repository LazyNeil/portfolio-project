function WorkComponent({ title, description, link = "#", datetime, tags }) {
    let tagsString = tags ? tags.join(', ') : 'TAG, TAG, TAG';
    let timestamp = datetime ? new Date(datetime) : new Date();
    let year = timestamp.toDateString();
    return (
        <section className="bg-zinc-50 p-4 rounded w-full">
            <a href={link}>
                <h2 className="py-2 text-xl">{title || "Great title here"}</h2>
            </a>
            <span>
                <time datetime={datetime}>{year}</time>
                <em className="px-3 text-gray-500">{tagsString}</em>
            </span>
            <p className="py-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </section>
    )
}

export default WorkComponent;