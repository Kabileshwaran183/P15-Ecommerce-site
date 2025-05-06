
const Button = ({ label, iconUrl, bgColor, borderColor, textColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4
                        border font-montserrat text-lg leading-none max-xl:
                        ${bgColor
                ? `${bgColor} ${borderColor} ${textColor} `
                : "bg-coral-red border-coral-red text-white"
            } rounded-full ${fullWidth && "w-full"} transition duration-300 ease-in-out hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-coral-red focus:ring-offset-2`}>
            {label}
            {iconUrl && <img src={iconUrl}
                alt="arrow-right-icon"
                className="ml-2 rounded-full w-5 h-5" />}
        </button>
    )
}

export default Button