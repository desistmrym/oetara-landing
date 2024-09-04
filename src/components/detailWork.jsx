import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./loader";

const DetailWork = () => {
    let { id } = useParams()
    const [data, setData] = useState([]);
    const [getLogo, setLogo] = useState([]);
    const [showLoad, setShowLoad] = useState(false)
    
    const getData = () => {
        setShowLoad(true)
        const api = apiUrl + 'case-study/'+id+'?acf_format=standard'
        axios.get(api)
        .then(res => {
            setData(res.data)
            if ("acf" in res.data)
            getClient(res.data.acf.client[0].ID)
        })
        .catch(() => {
            setShowLoad(false)
        })
    }

    const getClient = (id_client) => {
        setShowLoad(true)
        const api = apiUrl + 'client/'+id_client+'?acf_format=standard';
        axios.get(api)
        .then(res => {
            setLogo(res.data)
            setShowLoad(false)
        })
        .catch(() => {
            setShowLoad(false)
        })
    }

    useEffect(() => {
        getData();
    },[])
    return (
        <div className="bg-[#4f4c52]">
            {!showLoad ? 
                <div className="px-3 py-2 lg:px-5 lg:py-5 flex justify-center items-center h-screen font-['montserrat-regular']">
                    {"acf" in data && "acf" in getLogo ? 
                        <div>
                            <Link to="/">
                                <div className="text-right text-white text-md lg:text-lg lg:mx-[10%] pb-3 hover:underline">Back to Home</div>
                            </Link>
                            <div className="lg:mx-[10%] overflow-y-scroll scroll-bar h-[90vh] bg-white rounded-t-[10px]" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                                <div className="p-5 lg:p-[5em] text-lg">
                                    <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-10">
                                        <img src={getLogo.acf.logo} alt="logo" className="w-[10em] object-contain" />
                                        <div className="font-bold text-[2em] lg:text-[3em] py-5 text-left leading-[1.5]" dangerouslySetInnerHTML={{__html: data.title.rendered}} ></div>
                                    </div>
                                    <div className="font-bold flex justify-start md:justify-center flex-wrap lg:flex-nowrap py-2 gap-4 lg:gap-[3em]">
                                        <div className="">Client Type : {data.acf.client_type[0].name}</div>
                                        <div className="">Client : {data.acf.client[0].post_title}</div>
                                        <div className="">Service : {data.acf.service_type[0].name}</div>
                                    </div>
                                    <div className="py-3" dangerouslySetInnerHTML={{__html: data.acf.case_description}}></div>
                                    <div className="py-3" dangerouslySetInnerHTML={{__html: data.acf.oetara_mission_description}}></div>

                                    <div className="py-3 flex justify-between flex-wrap lg:flex-nowrap gap-5">
                                        <div className="w-[100%] lg:w-[50%]">
                                            <div className="font-bold">Goal/Agency Task</div>
                                                {data.acf.tasks.length > 0 ? 
                                                    <ul className="list-disc mx-7">
                                                        {data.acf.tasks.map((item,i) => 
                                                            <li key={i}>{item.task}</li>
                                                        )}
                                                    </ul>
                                                : null}
                                        </div>
                                        <div className="w-[100%] lg:w-[50%]">
                                            <div className="font-bold">Deliverables</div>
                                            {data.acf.deliverables.length > 0 ? 
                                                <ul className="list-disc mx-7">
                                                    {data.acf.deliverables.map((item,i) => 
                                                        <li key={i}>{item.deliverable}</li>
                                                    )}
                                                </ul>
                                            : null}
                                        </div>
                                    </div>

                                    {data.acf.results.length > 0 ? 
                                        <div className="py-3 ">
                                            {data.acf.results.map((item,x) => 
                                                <div className="grid grid-cols-2">
                                                    <div key={x} className="p-2 border font-bold">{item.result_key}</div>
                                                    <div key={x} className="p-2 border" dangerouslySetInnerHTML={{__html: item.result_value }}></div>
                                                </div>
                                            )}
                                        </div>
                                    : null}

                                    {data.acf.case_gallery.length > 0 ?
                                        <div className="py-3">
                                            <div className="font-bold text-3xl py-5">Gallery</div>
                                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                                                {data.acf.case_gallery.map((item,x) => 
                                                    <img key={x} src={item.url} alt="" className="pb-5 w-[100%] object-contain" />
                                                )}
                                            </div>
                                        </div> 
                                    :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    :
                        <div className="text-center text-[1.5em] lg:text-[2em]">No Data!</div>
                    }
                </div>
            : 
                <Loader />
            }
        </div>
    )
}

export default DetailWork;