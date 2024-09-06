import { useNavigate } from "react-router-dom";
import { oetara } from "../etc/images";

const HeaderLogo = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='flex justify-center w-[100%] cursor-hover' onClick={() => handleClick()}>
            <img src={oetara} alt="logo" className='w-[30%] lg:w-[10%]' />
        </div>
    )
}

export default HeaderLogo;