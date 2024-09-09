import { useEffect, useState } from 'react';
import { apiUrl } from '../etc/helper'
import axios from 'axios';
import Loader from './loader';
import { cover_about, huruf_a, huruf_e, huruf_o, huruf_r, huruf_t, paper_bottom, paper_top } from '../etc/images';
import HeaderLogo from './headerLogo';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref: subheadingRef, inView: subheadingInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: letterRef, inView: letterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: descLetterRef, inView: descLetterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: titleTeamRef, inView: titleTeamInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imgTeamRef, inView: imgTeamInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: titleClientRef, inView: titleClientInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imgClientRef, inView: imgClientInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [content, setContent] = useState([]);
    const [team, setTeam] = useState([]);
    const [client, setClient] = useState([]);
    const [showLoad, setShowLoad] = useState(false);
    const [isAlpha, setIsAlpha] = useState({o: true, e: false, t: false, a1: false, r: false, a2: false})

    const getNavigator = () => {
        setShowLoad(true)
        const url = apiUrl + 'navigator?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setContent(res.data[0])
            getTeam();
        })
        .catch(() => {
            setShowLoad(false)
        })
    }

    const getTeam = () => {
        setShowLoad(true)
        const url = apiUrl + 'team?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setTeam(res.data)
            getClient();
        })
        .catch(() => {
            setShowLoad(false)
        })
    }
    
    const getClient = () => {
        setShowLoad(true)
        const url = apiUrl + 'client?&acf_format=standard&_fields=id,slug,title.rendered,acf';
        axios.get(url)
        .then(res => {
            setClient(res.data)
            setShowLoad(false)
        })
        .catch(() => {
            setShowLoad(false)
        })
    }

    useEffect(() => {
        getNavigator()
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

                    <div className='mt-3 px-[1em] md:px-[2em] lg:px-[5em] pb-[25em] bg-about' style={{backgroundImage: `url(${cover_about})`}}>
                            <div className='font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]'> 
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {"acf" in content ? content.acf.heading : null}
                                </motion.div>
                                <motion.div 
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%', transition: { duration: 1.5, delay: .5 } }}
                                >
                                    <div className='border-t-[.2em] border-t-[#AA2E2C] w-[35%]'></div>
                                </motion.div>
                            </div>
                    </div>
                    <div className='px-[1em] md:px-[2em] lg:px-[5em]'>
                        <div className='-mt-[3em] md:-mt-[3.5em] pl-[2.5em] lg:pl-[7em] text-[1.5em] md:text-[3em] font-["oswald-light"]'>
                            <motion.div 
                                ref={subheadingRef}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: subheadingInView ? 0 : 50, opacity: subheadingInView ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                            {"acf" in content ? content.acf.subheading : null}
                            </motion.div>
                        </div>
                    </div>


                    <div className="pt-[3em]">
                        <motion.div 
                            ref={letterRef}
                            initial={{ width: '0%', opacity: 0 }}
                            animate={{ width: letterInView ? '100%' : 0, opacity: letterInView ? 1 : 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute border-t-2 lg:border-t-4 border-white w-[100%] mt-[3.5em] md:mt-[5em] lg:mt-[8em]" 
                        />
                        <motion.div 
                            ref={letterRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: letterInView ? 1 : 0 }}
                            className='relative grid grid-cols-6 py-10 gap-3 lg:gap-0 px-[1em] md:px-[2em] lg:px-[5em] cursor-hover'
                        >
                            {['o', 'e', 't', 'a1', 'r', 'a2'].map((letter, index) => (
                                <motion.img
                                    ref={letterRef}
                                    key={letter}
                                    src={letter === 'a1' || letter === 'a2' ? huruf_a : eval(`huruf_${letter}`)}
                                    alt={letter}
                                    className={`w-[90%] hover:scale-[1.5]`}
                                    onClick={() => {setIsAlpha({...Object.fromEntries(Object.keys(isAlpha).map(k => [k, k === letter]))}), console.log(isAlpha)}}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: letterInView ? isAlpha[letter] ? 1.5 : 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                                />
                            ))}
                        </motion.div>
                        <div className='pt-10'>
                            <img src={paper_top} alt="paper" className='w-[100%] object-cover' />
                            <div className='bg-white text-black px-[1em] md:px-[2em] lg:px-[5em] text-center'>
                                <motion.div 
                                    ref={descLetterRef}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: descLetterInView ? 1 : 0, y: descLetterInView ? 0 : -50, transition: { duration: 0.5, delay: 0.5 } }}
                                    className='uppercase text-[1.5em] md:text-[3.5em] font-["oswald-medium"] md:-mt-5 shdaow-black'
                                >
                                    {"acf" in content && content.acf.navigation.length > 0 && content.acf.navigation.map((item, key) => 
                                        isAlpha[item.letter === 'A' && item.letter_order === '4' ? 'a1' : item.letter === 'A' && item.letter_order === '6'? 'a2' : item.letter.toLowerCase()] ? item.letter_heading : null
                                    )}
                                </motion.div>
                                <motion.div 
                                    ref={descLetterRef}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: descLetterInView ? 1 : 0, y: descLetterInView ? 0 : 50, transition: { duration: 0.5, delay: 0.5 } }}
                                    className='font-["oswald-light"] pt-5 text-[1em] md:text-[2em] lg:text-[3em]'
                                >
                                    {"acf" in content && content.acf.navigation.length > 0 && content.acf.navigation.map((item, key) => 
                                        isAlpha[item.letter === 'A' && item.letter_order === '4' ? 'a1' : item.letter === 'A' && item.letter_order === '6'? 'a2' : item.letter.toLowerCase()] ? item.description : null
                                    )}
                                </motion.div>
                            </div>
                            <img src={paper_bottom} alt="paper" className='w-[100%] object-cover' />
                        </div>
                    </div>
                    
                    <div className='pt-[1em] md:pt-[2em] lg:pt-[5em] px-[1em] md:px-[2em] lg:px-[5em]'>
                        <motion.div 
                            ref={titleTeamRef}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: titleTeamInView ? 1 : 0, y: titleTeamInView ? 0 : -50 }}
                            transition={{ duration: 0.5 }}
                            className='text-[1.5em] md:text-[3em] lg:text-[3.5em] text-center font-["oswald-medium"] pb-6 shadow-white'
                        >
                            OUR NAVIGATORS
                        </motion.div>
                        {team.length > 0 ? 
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                                {
                                    team.map((item, i) => (
                                        <div key={i} className='h-[50vh] relative teams cursor-hover overflow-hidden'>
                                            <motion.img 
                                                ref={imgTeamRef}
                                                initial={{opacity: 0, scale: 1.2}}
                                                animate={{ 
                                                    opacity: imgTeamInView ? 1 : 0, 
                                                    scale: imgTeamInView ? 1 : 1.6,
                                                    transition: { delay: .5, duration: 0.8}
                                                }} 
                                                src={item.acf.photo} 
                                                alt={`team-${i}`} 
                                                className='w-[100%] h-[100%] object-cover'
                                            />
                                            <div className="overlay">
                                                <div className="text-[2em] leading-[1.2] lg:text-[2.5em]">{item.acf.name}</div>
                                                <div className='text-[2em] lg:text-[3em]'>–</div>
                                                <div className="text-[2em] lg:text-[2em] leading-[1.3]">{item.title.rendered}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        
                        : 
                            <motion.div 
                                className='py-2 text-left text-[1.5em] md:text-[2em] text-white'
                            >
                                No Team.
                            </motion.div>
                        }
                    </div>

                    <div className='py-[1em] md:py-[2em] lg:py-[5em] px-[1em] md:px-[2em] lg:px-[5em] text-center'>
                        <motion.div
                            ref={titleClientRef}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: titleClientInView ? 1 : 0, y: titleClientInView ? 0 : -50 }} 
                            transition={{ duration: 0.5 }}
                            className='text-[1.5em] md:text-[3em] lg:text-[3.5em] font-["oswald-medium"] shadow-white'
                        >
                            OUR CLIENT
                        </motion.div>
                        {client.length > 0 ? 
                            <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-1 lg::gap-8">
                                {client.map((item, x) => 
                                        <div key={x} className="px-5 py-5 h-[30vh] cursor-hover">
                                            <motion.img 
                                                ref={imgClientRef}
                                                initial={{opacity: 0, scale: 1.2}}
                                                animate={{ 
                                                    opacity: imgClientInView ? 1 : 0, 
                                                    scale: imgClientInView ? 1 : 1.2,
                                                }}
                                                transition={{ 
                                                    duration: 0.8, 
                                                    delay: x * 0.1 // Stagger effect
                                                }}
                                                src={item.acf.logo} 
                                                alt={`Client ${x + 1}`} 
                                                className='img-client w-[100%] h-[100%] object-contain' 
                                            />
                                        </div>
                                )}
                            </div>
                        : 
                            <div className='py-2 text-left text-[1.5em] md:text-[2em]'>No Client.</div>
                        }
                    </div>
                </div>
            :
                <Loader />
            }
        </motion.div>
    )
}

export default About;