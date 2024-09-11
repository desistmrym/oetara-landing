import axios from "axios";
import { art1, cover_service, cover_service1, flow_service, footer_service, oetara, paper_bottom, paper_top } from "../etc/images";
import { Fragment, useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import Loader from "./loader";
import HeaderLogo from "./headerLogo";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Service = () => {
    const [service, setService] = useState([]);
    const [showLoad, setShowLoad] = useState(false);

    const { ref: serviceRef, inView: serviceInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: flowRef, inView: flowInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {!showLoad ? 
                <div className="pt-5 lg:pt-4 bg-black text-white">
                    <HeaderLogo />

                    <div className='mt-3 bg-service' style={{backgroundImage: `url(${cover_service})`}}>
                        <div className="relative" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                            <div className="px-[1em] md:px-[2em] lg:px-[5em] pb-[25em]">
                            <div className='font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]'> 
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.
                                </motion.div>
                                <motion.div 
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%', transition: { duration: 1.5, delay: .5 } }}
                                >
                                    <div className='border-t-[.2em] border-t-[#AA2E2C] w-[35%]'></div>
                                </motion.div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[5em]">
                        <img src={paper_top} alt="" className="w-[100%]" />
                    </div>
                    <div className="px-[1em] md:px-[2em] lg:px-[5em] py-5 bg-white">
                        {service.length > 0 ? 
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-[2em] text-black">
                                {service.map((item, key) =>
                                    <motion.div 
                                        ref={serviceRef}
                                        initial={{ opacity: 0, marginLeft: -50 }}
                                        animate={{ opacity: serviceInView ? 1 : 0, marginLeft: serviceInView ? 0 : -50 }}
                                        transition={{ duration: 0.8, delay: 0.2 + key * 0.2  }}
                                        key={key}
                                    >
                                        <img src={item.acf.icon} alt="" />
                                        <div className="text-[2em] py-2">{item.title.rendered}</div>
                                        <div className="text-2xl font-['oswald-light']">{item.acf.description}</div>
                                    </motion.div>
                                )}
                            </div>
                            : null
                        }
                    </div>
                    <div className="">
                        <img src={paper_bottom} alt="" className="w-[100%]" />
                    </div>

                    <div className="py-[3em]">
                        <div className='mt-3 bg-service' style={{backgroundImage: `url(${cover_service1})`}}>
                            <div className="relative" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                                <div className="px-[3em] md:px-[5em] lg:px-[10em] flex justify-center items-center h-[100vh]">
                                    <motion.div
                                        ref={textRef}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
                                        transition={{ duration: 0.8 }} 
                                        className='font-["oswald-light"] text-[1.5em] md:text-[3em] text-center'
                                    > 
                                        OETARA is a maps  where top strategic, creative, Influencer, and analysts who called themselves "Navigator" let us show you the right path
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="py-3 px-[1em] md:px-[2em] lg:px-[10em] ">
                        <div className="flex justify-between">
                            {flow_service.col1.map((elm,idx) => 
                                <Fragment key={idx} >
                                    <motion.div
                                        ref={flowRef}
                                        initial={{ opacity: 0, marginLeft: -50 }}
                                        animate={{ opacity: flowInView ? 1 : 0, marginLeft: flowInView ? 0 : -50 }}
                                        transition={{ duration: 0.8, delay: 0.1 + idx * 0.2 }} 
                                        className="w-[4em] md:w-[8em] flex justify-center"
                                    >
                                        <div>
                                            <img src={elm.flow_img} alt="" className="w-[100%] h-[4em] md:h-fit object-contain" />
                                            <div className="text-center pt-5 text-[1em] md:text-[1.2em]">{elm.flow_title}</div>
                                        </div>
                                    </motion.div>
                                    {idx !== 2 ? 
                                        <motion.div 
                                            ref={flowRef}
                                            initial={{ opacity: 0, marginLeft: -50 }}
                                            animate={{ opacity: flowInView ? 1 : 0, marginLeft: flowInView ? 0 : -50 }}
                                            transition={{ duration: 0.8, delay: 0.1 + idx * 0.2 }}
                                            className="flex justify-center items-center -mt-10"
                                        >
                                            <div className="inline-block relative bg-[#eee] border-[#eee] py-[4px] md:py-[8px] px-[12px] md:px-[20px] rounded-sm text-2xl text-center font-bold uppercase h-[40px] md:h-[46px] before:content-[' '] before:absolute before:z-0 before:bg-[#eee] before:border-[#eee] before:mt-[1px] md:before:mt-[2px] before:w-[28px] md:before:w-[32px] before:h-[28px] md:before:h-[32px] before:transform before:rotate-45 before:top-[5px] before:-right-[13px] md:before:-right-[15px] before:origin-[50%] "></div>
                                        </motion.div>
                                    : null}
                                </Fragment>
                            )}
                        </div>
                        <motion.div
                            ref={flowRef}
                            initial={{ opacity: 0, marginLeft: -50 }}
                            animate={{ opacity: flowInView ? 1 : 0, marginLeft: flowInView ? 0 : -50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}  
                            className="py-5 flex justify-end"
                        >
                            <div className="inline-block relative mr-[.5em] md:mr-[2em] bg-[#eee] border-[#eee] py-[4px] md:py-[8px] px-[20px] md:px-[20px] rounded-sm text-2xl text-center font-bold uppercase h-[24px] md:h-[40px] before:content-[' '] before:absolute before:z-0 before:bg-[#eee] before:border-[#eee] before:mt-[1px] before:w-[28px] md:before:w-[28px] before:h-[28px] md:before:h-[28px] before:transform before:rotate-45 before:-bottom-[13px] before:right-[6px] before:origin-[50%] "></div>
                        </motion.div>
                        <div className="flex justify-between py-5">
                            {flow_service.col2.map((elm,idx) => 
                                <Fragment key={idx} >
                                    <motion.div 
                                        ref={flowRef}
                                        initial={{ opacity: 0, marginLeft: -50 }}
                                        animate={{ opacity: flowInView ? 1 : 0, marginLeft: flowInView ? 0 : -50 }}
                                        transition={{ duration: 0.8, delay: 1 - idx * 0.2 }} 
                                        className="w-[4em] md:w-[8em] flex justify-center"
                                    >
                                        <div>
                                            <img src={elm.flow_img} alt="" className="w-[100%] h-[4em] md:h-fit object-contain" />
                                            <div className="text-center pt-5 text-[1em] md:text-[1.2em]">{elm.flow_title}</div>
                                        </div>
                                    </motion.div>
                                    {idx !== 2 ? 
                                        <motion.div
                                            ref={flowRef}
                                            initial={{ opacity: 0, marginLeft: -50 }}
                                            animate={{ opacity: flowInView ? 1 : 0, marginLeft: flowInView ? 0 : -50 }}
                                            transition={{ duration: 0.8, delay: 1 - idx * 0.2 }}  
                                            className="flex justify-center items-center -mt-10"
                                        >
                                            <div className="inline-block relative bg-[#eee] border-[#eee] py-[4px] md:py-[8px] px-[12px] md:px-[20px] rounded-sm text-2xl text-center font-bold uppercase h-[40px] md:h-[46px] before:content-[' '] before:absolute before:z-0 before:bg-[#eee] before:border-[#eee] before:mt-[1px] md:before:mt-[2px] before:w-[28px] md:before:w-[32px] before:h-[28px] md:before:h-[32px] before:transform before:rotate-45 before:top-[5px] before:-left-[13px] md:before:-left-[15px] before:origin-[50%] "></div>
                                        </motion.div>
                                    : null}
                                </Fragment>
                            )}
                        </div>
                    </div>

                    <div>
                        <img src={footer_service} alt="footer" className="absolute w-[100%]" />
                        <div className="relative flex justify-center items-center h-[18vh] md:h-[26vh] lg:h-[70vh]">
                            <div className="text-center">
                                <motion.div 
                                    ref={flowRef}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: flowInView ? 1 : 0, y: flowInView ? 0 : -50 }}
                                    transition={{ duration: 0.8, delay: 0.8 }} 
                                    className="flex justify-center"
                                >
                                    <img src={oetara} alt="" className="w-[20%]" />
                                </motion.div>
                                <motion.div 
                                    ref={flowRef}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: flowInView ? 1 : 0, y: flowInView ? 0 : 50 }}
                                    transition={{ duration: 0.8, delay: 1 }}  
                                    className="text-[1em] md:text-[2em] lg:text-[3em]"
                                >
                                    A Digital Agency that you can Trust
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <Loader />
            }
        </motion.div>
    )
}

export default Service;