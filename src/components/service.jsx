import axios from "axios";
import { art1, serv1, serv2, serv3, serv4 } from "../etc/images";
import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";

const Service = () => {
    const [service, setService] = useState([]);

    const getService = () => {
        const api = apiUrl + 'service?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(api)
        .then(res => {
            setService(res.data)
        })
        .catch(err => {
            setService([]);
        })
    }

    useEffect(() => {
        getService();
    })

    return (
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
                    {/* <div className="flex flex-wrap lg:flex-nowrap gap-3 justify-between">
                        <div className="w-[100%] lg:w-[25%]">
                        </div>
                        <div className="w-[100%] lg:w-[25%]">
                            <img src={serv2} alt="" />
                            <div className="text-[2em] py-2">Creative Idea makes Creative Output</div>
                            <div className="text-2xl font-['fairweather']">What we provide : Social media Maintenance, Video Production, Digital Activation</div>
                        </div>
                        <div className="w-[100%] lg:w-[25%]">
                            <img src={serv3} alt="" />
                            <div className="text-[2em] py-2">Advertise Your Brand</div>
                            <div className="text-2xl font-['fairweather']">What we provide : Meta Ads, Tiktok Ads, Google Ads, Linkedin Ads</div>
                        </div>
                        <div className="w-[100%] lg:w-[25%]">
                            <img src={serv4} alt="" />
                            <div className="text-[2em] py-2">Impressive Marketing Strategy</div>
                            <div className="text-2xl font-['fairweather']">What we provide : Digital Marketing 360, Influencer Marketing with creative Communication, Digital Ads strategy with impressive Accuration</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Service;