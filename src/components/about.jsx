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
                <div className='text-center lg:text-justify text-[2em] md:text-[3em] lg:text-[5em] w-[100%] lg:w-[70%] tracking-[0.5em]'>INTRODUCTION</div>
                <div className='w-[100%] lg:w-[30%] text-[40px]'>
                    <div className='text-[0.6em] md:text-[1em] lg:text-md'>Established in 2022</div>
                    <div className='text-[0.5em] md:text-[0.8em] lg:text-md'>We are not only crafting the right message but also setting the measurable goals and will be your guidance through Digital World Crowdedness.</div>
                </div>
            </div>
            
            <div className='pt-[1em] md:pt-[2em] lg:pt-[5em]'>
                <div className='text-[2em] md:text-[3em] lg:text-[4em] font-["fusion-sans"]'>THE TEAM</div>
                {team.length > 0 ? 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 md:p-0 gap-3'>
                        {
                            team.map((item, i) => (
                                <div key={i} className='h-[25vh] md:h-[50vh]'>
                                    <div class="card">
                                        <img src={item.acf.photo} className='img-team w-[100%] h-[100%] object-cover' />
                                        <div class="footer">
                                            <div class="info py-2 text-center">
                                                <div class="text-2xl">{item.acf.name}</div>
                                                <div class="text-lg">{item.title.rendered}</div>
                                            </div>
                                        </div>
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
                <div className='text-[2em] md:text-[3em] lg:text-[4em] font-["fusion-sans"]'>OUR CLIENT</div>
                {client.length > 0 ? 
                    <div className="py-2 grid grid-cols-6 gap-3">
                        {client.map((item,x) => 
                            <div key={x} className="bg-black/50 p-1 h-[12vh]">
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