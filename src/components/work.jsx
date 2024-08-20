import { service } from "../etc/images";

const Work = () => {
    return (
        <div>
            <div className="aboslute">
                <div className="flex justify-center w-[100%]">
                    <div className="moon1"></div>
                    <div>
                        <div className="relative h-[50rem] w-[100%] flex justify-center items-center">
                            <div className="text-[8rem] text-white font-['fusion-sans']">OUR CASE STUDY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white w-[100%] -mt-[20vh] pb-[6em]">
                <div className="grid grid-cols-4 cursor-pointer">
                    {service.map(item => (
                        <div id="serv_hover" className="p-2 border">
                            <img src={item.img} alt="" />
                            <div className="px-5 flex justify-between font-['pathway-gothic']">
                                <div>
                                    <div className="text-[20px] font-['fusion-sans']">CLIENT</div>
                                    <div>{item.client}</div>
                                </div>
                                <div>
                                    <div className="text-[20px] font-['fusion-sans']">SERVICE</div>
                                    <div>{item.service}</div>
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