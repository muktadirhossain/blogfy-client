import { cn } from "../../utils/cn"

const HeadingText = ({ children, className, ...rest }) => {
    return (
        <h2 className={cn("text-center text-2xl my-3 font-semibold", className)} {...rest}>
            <span className="bg-gradient-to-r from-green-500  to-violet-400 text-transparent bg-clip-text">
                {children}
            </span>
        </h2>
    )
}

export default HeadingText;