import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import axios from "axios";
import { Link } from "react-router-dom";
import { moon } from "../etc/images";

const Work = () => {
    const [work, setWork] = useState([]);

    const getWork = () => {
        let url = apiUrl + 'case-study?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setWork(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getWork()
    }, []);
    return (
        <div>
            <div className="aboslute">
                <div className="flex justify-center w-[100%]">
                    <div className="moon1"></div>
                    <div>
                        <div className="relative h-[20rem] md:h-[40rem] lg:h-[50rem] w-[100%] flex justify-center items-center">
                            <div className="text-[2em] md:text-[5em] lg:text-[7rem] text-white font-['fusion-sans']">OUR CASE STUDY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white w-[100%] -mt-[12vh] md:-mt-[22vh] lg:-mt-[20vh] pb-[6em]">
                {work.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-4 cursor-pointer">
                        {work.map((item, x) => 
                            <a key={x} href={"/work/"+item.id} target="_blank">
                                <div id="serv_hover" className="px-5 py-3 border text-black">
                                    <div className="flex justify-center w-[100%] p-5">
                                        <img src={item.acf.featured_image} alt="" className="w-[14em] md:w-[100%] h-[20vh]  object-contain" />
                                    </div>
                                    <div className="py-5 flex justify-between font-['pathway-gothic']">
                                        <div className="w-[50%]">
                                            <div className="text-[12px] lg:text-[20px] font-['fusion-sans']">CLIENT</div>
                                            <div className="text-[11px] lg:text-lg">{item.acf.client[0].post_title}</div>
                                        </div>
                                        <div className="w-[50%] text-right">
                                            <div className="text-[12px] lg:text-[20px] font-['fusion-sans']">SERVICE</div>
                                            <div className="text-[11px] lg:text-lg">{item.acf.service_type[0].name}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                : 
                    <div className="text-center h-[20vh] flex justify-center items-center py-2 px-8 text-[1.5em] lg:text-[2em] text-black">No Work.</div>
                }
                    {/* {service.map(item => (
                    ))} */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Work;