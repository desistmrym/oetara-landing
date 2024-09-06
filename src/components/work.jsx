import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import axios from "axios";
import Loader from "./loader";
import HeaderLogo from "./headerLogo";
import { cover_work, paper_bottom, paper_top } from "../etc/images";

const Work = () => {
    const [work, setWork] = useState([]);
    const [showLoad, setShowLoad] = useState(false)

    const getWork = () => {
        setShowLoad(true)
        let url = apiUrl + 'case-study?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setWork(res.data)
            setShowLoad(false)
        })
        .catch(() => {
            setShowLoad(false)
        })
    }

    useEffect(() => {
        getWork()
    }, []);
    return (
        <>
            {!showLoad ? 
                <div className="pt-5 lg:pt-4 bg-black text-white">
                    <HeaderLogo />

                    <div className='mt-3 bg-email' style={{backgroundImage: `url(${cover_work})`}}>
                        <div className="relative" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                            <div className="px-[1em] md:px-[2em] lg:px-[5em] pb-[25em]">
                            <div className='font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]'> 
                                We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.
                                <div className='border-t-[.2em] border-t-[#AA2E2C] w-[35%]'></div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[5em]">
                        <img src={paper_top} alt="" className="w-[100%]" />
                    </div>
                    <div className="px-[1em] md:px-[2em] lg:px-[5em] text-[3.5em] bg-white text-black shadow-black text-center">
                        OUR CASE STUDY
                    </div>
                    <div className="">
                        <img src={paper_bottom} alt="" className="w-[100%]" />
                    </div>

                    <div>
                        <div className="w-[100%]">
                            {work.length > 0 ?
                                <div className="grid grid-cols-1 md:grid-cols-3  cursor-pointer">
                                    {work.map((item, x) => 
                                        <a key={x} href={"/work/"+item.id} target="_blank">
                                            <div className="px-3 py-3 text-black works text-center h-full">
                                                <img src={item.acf.featured_image} alt="" className="w-[14em] md:w-[100%] h-[100%] object-cover" />
                                                <div className="overlay">
                                                    <div className="text-[2em] leading-[1.2] lg:text-[2.5em]">{item.acf.client[0].post_title} : {item.acf.service_type[0].name}</div>
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            : 
                                <div className="text-center h-[20vh] flex justify-center items-center py-2 px-8 text-[1.5em] lg:text-[2em] text-black">No Work.</div>
                            }
                        </div>
                    </div>
                </div>
            : 
                <Loader />
            }
        </>
    )
}

export default Work;