import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import axios from "axios";
import Loader from "./loader";
import HeaderLogo from "./headerLogo";
import { cover_work, paper_bottom, paper_top } from "../etc/images";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
    const { ref: workRef, inView: workInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imgWorkRef, inView: imgWorkInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [work, setWork] = useState([]);
    const [showLoad, setShowLoad] = useState(false);

    const sort = (array) => {
        return array.sort((a,b) => {
            return a.acf.column_order - b.acf.column_order 
        })
    }
    
    const getWork = () => {
        setShowLoad(true)
        let url = apiUrl + 'case-study?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            const { data } = res;
            let sort_column = sort(data);
            setWork(sort_column)
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {!showLoad ? 
                <div className="pt-5 lg:pt-4 bg-black text-white">
                    <HeaderLogo />

                    <div className='mt-3 bg-email' style={{backgroundImage: `url(${cover_work})`}}>
                        <div className="relative" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                            <div className="px-[1em] md:px-[2em] lg:px-[5em] pb-[25em]">
                            <div className={`font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]`}> 
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
                    <div
                        className="px-[1em] md:px-[2em] lg:px-[5em] text-[3.5em] bg-white text-black shadow-black text-center"
                    >
                        <motion.div
                            ref={workRef}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: workInView ? 1 : 0, y: workInView ? 0 : -50 }}
                            transition={{ duration: 1 }}
                        >
                            OUR CASE STUDY
                        </motion.div>
                    </div>
                    <div className="">
                        <img src={paper_bottom} alt="" className="w-[100%]" />
                    </div>

                    <div>
                        <div className="w-[100%]">
                            {work.length > 0 ? 
                                <motion.div
                                    ref={imgWorkRef}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: imgWorkInView ? 1 : 0 }}
                                    className="flex flex-wrap justify-center"
                                >
                                    {work.map((item, index) => (
                                        <a
                                            key={index} 
                                            href={"/work/"+item.id} 
                                            className={`cursor-hover p-1 md:p-2 ${index % 5 === 0 ? 'w-[50%]' : 'w-[25%]'}`}
                                            target="_blank">
                                            <div className="text-black works text-center h-full">
                                                <motion.img 
                                                    ref={imgWorkRef}
                                                    initial={{opacity: 0, scale: 0.5}}
                                                    animate={{ 
                                                        opacity: imgWorkInView ? 1 : 0, 
                                                        scale: imgWorkInView ? 1 : 0.5,
                                                    }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        delay: 1 + index * 0.1 // Stagger effect
                                                    }}
                                                    src={item.acf.featured_image} 
                                                    alt="" 
                                                    className="w-full h-[20vh] md:h-[40vh] lg:h-[60vh] xl:h-[80vh] object-cover" 
                                                />
                                                <div className="overlay">
                                                    <div className="text-[2em] leading-[1.2] lg:text-[2.5em]">{item.acf.client[0].post_title} : {item.acf.service_type[0].name}</div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </motion.div>
                            : 
                                <div className="text-center h-[20vh] flex justify-center items-center py-2 px-8 text-[1.5em] lg:text-[2em] text-black">No Work.</div>
                            }
                        </div>
                    </div>
                </div>
            : 
                <Loader />
            }
        </motion.div>
    )
}

export default Work;