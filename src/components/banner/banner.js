const Banner = (props) => {
    const { title, subtitle, buttonTitle, buttonFunction } = props;

    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border px-8 m-10">
            {title && (<p className="text-3xl text-gray-700 font-bold mb-5 mt-5">{title}</p>)}
            {subtitle && (<p className="text-gray-500 text-lg">{subtitle}</p>)}
            {buttonTitle && buttonFunction && <button className="bg-blue-300 rounded-xl p-2 font-bold my-3" onClick={buttonFunction}>{buttonTitle}</button>}
        </div>
    );
}

export default Banner;