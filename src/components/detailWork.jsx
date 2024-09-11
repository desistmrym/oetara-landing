import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./loader";
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {!showLoad ? 
                <div>
                    {"acf" in data && "acf" in getLogo ? 
                        <div className="bg-black text-white flex justify-between flex-wrap lg:flex-nowrap">
                            <div className="w-[100%] lg:w-[40%] flex justify-center items-center h-[100vh]">
                                <div className="px-[1em] md:px-[5em]">
                                    <motion.div 
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="font-bold text-[2em] lg:text-[3em] py-5 text-left" 
                                        dangerouslySetInnerHTML={{__html: data.title.rendered}} 
                                    ></motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className="py-3" 
                                        dangerouslySetInnerHTML={{__html: data.acf.case_description}}
                                    ></motion.div>
                                    <table className="font-bold">
                                        <motion.tr
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 1 }}
                                        >
                                            <td className="py-1">Client</td>
                                            <td className="px-3">:</td>
                                            <td>{data.acf.client[0].post_title}</td>
                                        </motion.tr>
                                        <motion.tr
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 1.5 }}
                                        >
                                            <td className="py-1">Service</td>
                                            <td className="px-3">:</td>
                                            <td>{data.acf.service_type[0].name}</td>
                                        </motion.tr>
                                        <motion.tr
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 1.8 }}
                                        >
                                            <td className="py-1">Location</td>
                                            <td className="px-3">:</td>
                                            <td>{data.acf.location}</td>
                                        </motion.tr>
                                    </table>
                                    <div className="py-5" >
                                        <motion.a 
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 2.2 }}
                                            href={data.acf.client_website} 
                                            target="_blank" 
                                            className="underline text-white cursor-hover"
                                        >
                                            Visit Website
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] lg:w-[60%]">
                                <div className="absolute right-0 top-0 lg:relative">
                                    <motion.img 
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8}}
                                        src={getLogo.acf.logo} 
                                        alt="logo" 
                                        className="w-[8em] md:w-[16em] lg:w-[100%] lg:h-[100vh] object-cover" 
                                    />
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
        </motion.div>
    )
}

export default DetailWork;