import { service } from "../etc/images";

const Work = () => {
    return (
        <div>
            <div className="aboslute">
                <div className="flex justify-center w-[100%]">
                    <div className="moon1"></div>
                    <div>
                        <div className="relative h-[28rem] md:h-[40rem] lg:h-[50rem] w-[100%] flex justify-center items-center">
                            <div className="text-[3em] md:text-[5em] lg:text-[8rem] text-white font-['fusion-sans']">OUR CASE STUDY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white w-[100%] -mt-[18vh] md:-mt-[22vh] lg:-mt-[20vh] pb-[6em]">
                <div className="grid grid-cols-4 cursor-pointer">
                    {service.map(item => (
                        <div id="serv_hover" className="p-2 border">
                            <img src={item.img} alt="" />
                            <div className="lg:px-5 flex justify-between font-['pathway-gothic']">
                                <div className="w-[50%]">
                                    <div className="text-[12px] lg:text-[20px] font-['fusion-sans']">CLIENT</div>
                                    <div className="text-[11px] lg:text-md">{item.client}</div>
                                </div>
                                <div className="w-[50%]">
                                    <div className="text-[12px] lg:text-[20px] font-['fusion-sans']">SERVICE</div>
                                    <div className="text-[11px] lg:text-md">{item.service}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work;