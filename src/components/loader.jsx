import { loader } from "../etc/images";

const Loader = () => {
    return (
        <div className="w-[100%] h-screen flex justify-center items-center">
            <img src={loader} alt="loader" className="w-[100%] h-screen object-cover" />
        </div>
    )
}

export default Loader;