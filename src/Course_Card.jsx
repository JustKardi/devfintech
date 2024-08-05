function CourseCard(imgSrc, title, description) {
    return (
        <div>
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}