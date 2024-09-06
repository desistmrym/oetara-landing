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
        <>
            {!showLoad ? 
                <div>
                    {"acf" in data && "acf" in getLogo ? 
                        <div className="bg-black text-white flex justify-between flex-wrap lg:flex-nowrap">
                            <div className="w-[100%] lg:w-[40%] flex justify-center items-center h-[100vh]">
                                <div className="px-[1em] md:px-[5em]">
                                    <div className="font-bold text-[2em] lg:text-[3em] py-5 text-left" dangerouslySetInnerHTML={{__html: data.title.rendered}} ></div>
                                    <div className="py-3" dangerouslySetInnerHTML={{__html: data.acf.case_description}}></div>
                                    <table className="font-bold">
                                        <tr>
                                            <td className="py-1">Client</td>
                                            <td className="px-3">:</td>
                                            <td>{data.acf.client[0].post_title}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Service</td>
                                            <td className="px-3">:</td>
                                            <td>{data.acf.service_type[0].name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">Location</td>
                                            <td className="px-3">:</td>
                                            <td></td>
                                        </tr>
                                    </table>
                                    <div className="py-5" >
                                        <a href={data.acf.client_website} target="_blank" className="underline text-white cursor-hover">Visit Website</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] lg:w-[60%]">
                                <div className="absolute right-0 top-0 lg:relative">
                                    <img src={getLogo.acf.logo} alt="logo" className="w-[8em] md:w-[16em] lg:w-[100%] lg:h-[100vh] object-cover" />
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
        </>
    )
}

export default DetailWork;