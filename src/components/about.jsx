import { useEffect, useState } from 'react';
import { apiUrl } from '../etc/helper'
import axios from 'axios';
import Loader from './loader';
import { cover_about, huruf_a, huruf_e, huruf_o, huruf_r, huruf_t, oetara, paper_bottom, paper_top } from '../etc/images';

const About = () => {
    const [team, setTeam] = useState([]);
    const [client, setClient] = useState([]);
    const [showLoad, setShowLoad] = useState(false);
    const [isAlpha, setIsAlpha] = useState({o: true, e: false, t: false, a1: false, r: false, a2: false})

    const getTeam = () => {
        setShowLoad(true)
        const url = apiUrl + 'team?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setTeam(res.data)
            setShowLoad(false)
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
        getTeam();
        getClient();
    }, [])

    return (
        <>
            {!showLoad ? 
                <div className="pt-5 lg:pt-4 bg-black text-white">
                    <div className='flex justify-center w-[100%]'>
                        <img src={oetara} alt="logo" className='w-[30%] lg:w-[10%]' />
                    </div>

                    <div className='mt-3 px-[1em] md:px-[2em] lg:px-[5em] pb-[25em] bg-about' style={{backgroundImage: `url(${cover_about})`}}>
                        <div className='font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]'> 
                            We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.
                            <div className='border-t-[.2em] border-t-[#AA2E2C] w-[35%]'></div>
                        </div>
                    </div>
                    <div className='px-[1em] md:px-[2em] lg:px-[5em]'>
                        <div className='-mt-[3em] md:-mt-[3.5em] pl-[2.5em] lg:pl-[7em] text-[1.5em] md:text-[3em] font-["oswald-light"]'>
                            We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.
                        </div>
                    </div>


                    <div className="pt-[3em]">
                        <div className="absolute border-t-2 lg:border-t-4 border-white w-[100%] mt-[3.5em] md:mt-[5em] lg:mt-[8em]"></div>
                        <div className='relative grid grid-cols-6 py-10 gap-3 lg:gap-0 px-[1em] md:px-[2em] lg:px-[5em]'>
                            <img src={huruf_o} alt="o" className={`w-[90%] ${isAlpha['o'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: true, e: false, t: false, a1: false, r: false, a2: false})} />
                            <img src={huruf_e} alt="e" className={`w-[90%] ${isAlpha['e'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: false, e: true, t: false, a1: false, r: false, a2: false})} />
                            <img src={huruf_t} alt="t" className={`w-[90%] ${isAlpha['t'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: false, e: false, t: true, a1: false, r: false, a2: false})} />
                            <img src={huruf_a} alt="t" className={`w-[90%] ${isAlpha['a1'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: false, e: false, t: false, a1: true, r: false, a2: false})} />
                            <img src={huruf_r} alt="t" className={`w-[90%] ${isAlpha['r'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: false, e: false, t: false, a1: false, r: true, a2: false})} />
                            <img src={huruf_a} alt="t" className={`w-[90%] ${isAlpha['a2'] ? 'scale-[1.5]' : ''} hover:scale-[1.5] transition-[.5s]`} onClick={() => setIsAlpha({o: false, e: false, t: false, a1: false, r: false, a2: true})} />
                        </div>
                        <div className='pt-10'>
                            <img src={paper_top} alt="paper" className='w-[100%] object-cover' />
                            <div className='bg-white text-black px-[1em] md:px-[2em] lg:px-[5em] text-center'>
                                <div className='uppercase text-[1.5em] md:text-[3.5em] font-["oswald-medium"] md:-mt-5' style={{textShadow: '4px 4px 10px rgba(0,0,0,0.6)'}}>
                                    {isAlpha['o'] ? 
                                        'ORGANIC OUTCOME'
                                    : isAlpha['e'] ? 
                                        'Effective Execution'
                                    : isAlpha['t'] ? 
                                        'Trusted Technique'
                                    : isAlpha['a1'] ?
                                        'Authentic Ammunition'
                                    : isAlpha['r'] ?
                                        'Real Result'
                                    : isAlpha['a2'] ?
                                        'Aspirational Aim'
                                    : null
                                    }
                                </div>
                                <div className='font-["oswald-light"] pt-5 text-[1em] md:text-[2em] lg:text-[3em]'>
                                    {isAlpha['o'] ? 
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : isAlpha['e'] ? 
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : isAlpha['t'] ? 
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : isAlpha['a1'] ?
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : isAlpha['r'] ?
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : isAlpha['a2'] ?
                                        'We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.'
                                    : null
                                    }
                                </div>
                            </div>
                            <img src={paper_bottom} alt="paper" className='w-[100%] object-cover' />
                        </div>
                    </div>
                    
                    <div className='pt-[1em] md:pt-[2em] lg:pt-[5em] px-[1em] md:px-[2em] lg:px-[5em]'>
                        <div className='text-[1.5em] md:text-[3em] lg:text-[3.5em] text-center font-["oswald-medium"] pb-6' style={{textShadow: '4px 4px 10px rgba(255,255,255,0.6)'}}>OUR NAVIGATORS</div>
                        {team.length > 0 ? 
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                                {
                                    team.map((item, i) => (
                                        <div key={i} className='h-[50vh] relative teams'>
                                            <img src={item.acf.photo} alt={`team-${i}`} className='w-[100%] h-[100%] object-cover' />
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
                            <div className='py-2 text-left text-[1.5em] md:text-[2em]'>No Team.</div>
                        }
                    </div>

                    <div className='py-[1em] md:py-[2em] lg:py-[5em] px-[1em] md:px-[2em] lg:px-[5em] text-center'>
                        <div className='text-[1.5em] md:text-[3em] lg:text-[3.5em] font-["oswald-medium"]' style={{textShadow: '4px 4px 10px rgba(255,255,255,0.6)'}}>OUR CLIENT</div>
                        {client.length > 0 ? 
                            <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-1 lg::gap-8">
                                {client.map((item,x) => 
                                    <div key={x} className="px-5 py-5 h-[30vh]">
                                        <img src={item.acf.logo} alt="" className='img-client w-[100%] h-[100%] object-contain' />
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
        </>
    )
}

export default About;