import { useEffect, useState } from 'react';
import img1 from '../assets/images/intro.png'
import { apiUrl } from '../etc/helper'
import axios from 'axios';

const About = () => {
    const [team, setTeam] = useState([]);
    const [client, setClient] = useState([]);

    const getTeam = () => {
        const url = apiUrl + 'team?acf_format=standard&_fields=id,modified,slug,status,title,acf';
        axios.get(url)
        .then(res => {
            setTeam(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const getClient = () => {
        const url = apiUrl + 'client?&acf_format=standard&_fields=id,slug,title.rendered,acf';
        axios.get(url)
        .then(res => {
            setClient(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getTeam();
        getClient()
    }, [])

    return (
        <div className="pt-10 lg:pt-8 p-8 lg:p-10">
            <img src={img1} alt="" className="w-[100%]" />

            <div className='pt-5 flex flex-wrap lg:flex-nowrap justify-between'>
                <div className='text-center lg:text-justify text-[4em] md:text-[3em] lg:text-[5em] w-[100%] lg:w-[70%] tracking-[0.1em] md:tracking-[0.5em]'>INTRODUCTION</div>
                <div className='w-[100%] lg:w-[30%] text-[40px]'>
                    <div className='text-[1.5em] lg:text-md'>Established in 2022</div>
                    <div className='text-[.8em] lg:text-md'>We are not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness.</div>
                </div>
            </div>

            <div className="py-3">
                <div className='text-[4em] md:text[3em] lg:text-[4em] font-["fusion-sans"]'>WHY OETARA</div>
                <div className="py-2 text-[2em] lg:text-[2em]">Because we provide</div>
                <div className='grid grid-cols-0 lg:grid-cols-6 py-10 gap-3 lg:gap-0'>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">O</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] lg:text-[1.5em] text-center py-5 lg:py-2'>Organic Outcome</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Organic Outcome</div>
                    </div>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">E</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] py-5 lg:text-[1.5em] text-center lg:py-2'>Effective Execution</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Effective Execution</div>
                    </div>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">T</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] py-5 lg:text-[1.5em] text-center lg:py-2'>Trusted Technique</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Trusted Technique</div>
                    </div>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">A</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] py-5 lg:text-[1.5em] text-center lg:py-2'>Authentic Ammunition</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Authentic Ammunition</div>
                    </div>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">R</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] py-5 lg:text-[1.5em] text-center lg:py-2'>Real Result</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Real Result</div>
                    </div>
                    <div>
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className="w-[15%] lg:w-[calc(100%_/_3)] bg-black text-white px-[.7em] lg:px-[.8em] py-2 rounded-full text-[3em] lg:text-[5em] flex justify-center items-center font-['fusion-sans']">A</div>
                            <div className='hidden lg:block lg:w-[calc(100%_/_3)] border-t-4 border-black mt-[3.5em] p-5'></div>
                            <div className='px-5 block lg:hidden text-[2em] py-5 lg:text-[1.5em] text-center lg:py-2'>Aspirational Aim</div>
                        </div>
                        <div className='hidden lg:block px-5 text-[1.5em] text-center py-2'>Aspirational Aim</div>
                    </div>

                </div>
            </div>
            
            <div className='pt-[1em] md:pt-[2em] lg:pt-[5em]'>
                <div className='text-[4em] md:text-[3em] lg:text-[4em] font-["fusion-sans"]'>THE TEAM</div>
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

            <div className='py-[1em] md:py-[2em] lg:py-[5em]'>
                <div className='text-[4em] md:text-[3em] lg:text-[4em] font-["fusion-sans"]'>OUR CLIENT</div>
                {client.length > 0 ? 
                    <div className="py-2 grid grid-cols-2 md:grid-cols-6">
                        {client.map((item,x) => 
                            <div key={x} className="border px-5 py-5 h-[20vh]">
                                <img src={item.acf.logo} alt="" className='img-client w-[100%] h-[100%] object-contain' />
                            </div>
                        )}
                    </div>
                : 
                    <div className='py-2 text-left text-[1.5em] md:text-[2em]'>No Client.</div>
                }
            </div>
        </div>
    )
}

export default About;