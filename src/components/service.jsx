import axios from "axios";
import { art1 } from "../etc/images";
import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";

const Service = () => {
    const [service, setService] = useState([]);
    const [showLoad, setShowLoad] = useState(false)

    const getService = () => {
        setShowLoad(true)
        const api = apiUrl + 'service?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(api)
        .then(res => {
            setService(res.data)
            setShowLoad(false)
        })
        .catch(() => {
            setService([]);
            setShowLoad(false)
        })
    }

    useEffect(() => {
        getService();
    }, [])

    return (
        <>
            {!showLoad ? 
                <div className="px-10">
                    <div className="flex justify-end -mt-[3em] w-[100%]">
                        <img src={art1} alt="" />
                    </div>
                    <div className="relative -mt-[8em] md:-mt-[10] lg:-mt-[12em]">
                        <div className="text-[3em] md:text-[5em] lg:text-[8em] font-['fusion-sans']">OUR SERVICE</div>
                        <div className="py-[5em]">
                            {service.length > 0 ? 
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                    {service.map((item, key) =>
                                        <div key={key}>
                                            <img src={item.acf.icon} alt="" />
                                            <div className="text-[2em] py-2">{item.title.rendered}</div>
                                            <div className="text-2xl font-['fairweather']">{item.acf.description}</div>
                                        </div>
                                    )}
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            :
                <div className="w-[100%] h-screen flex justify-center items-center">
                    <div className="compass">
                    <div className="needle"></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Service;