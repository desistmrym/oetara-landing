import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailWork = () => {
    let { id } = useParams()
    const [data, setData] = useState([]);
    const getData = () => {
        const api = apiUrl + 'case-study?acf_format=standard&filter[p]='+id
        axios.get(api)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData();
    },[])
    return (
        <div className="px-3 py-2 lg:px-5lg:py-5 font-['montserrat-regular']">
            <Link to="/">
                <div className="text-right text-md lg:text-lg pb-3 text-black hover:underline">Back to all cases</div>
            </Link>
            {data.length > 0 ? 
                <div key={data[0].id} className="border-t py-5 text-lg lg:px-[30vh]">
                    <div className="font-bold text-[2em] lg:text-[3em] text-center leading-[1]" dangerouslySetInnerHTML={{__html: data[0].title.rendered}} ></div>
                    <div className="font-bold flex justify-center flex-wrap lg:flex-nowrap py-2 gap-4 lg:gap-[10em]">
                        <div className="">Client : {data[0].acf.client_type[0].name}</div>
                        <div className="">Service : {data[0].acf.service_type[0].name}</div>
                    </div>
                    <div className="py-3" dangerouslySetInnerHTML={{__html: data[0].acf.case_description}}></div>
                    <div className="py-3" dangerouslySetInnerHTML={{__html: data[0].acf.oetara_mission_description}}></div>

                    <div className="py-3 flex justify-between flex-wrap lg:flex-nowrap gap-5">
                        <div className="w-[100%] lg:w-[50%]">
                            <div className="font-bold">Goal/Agency Task</div>
                                {data[0].acf.tasks.length > 0 ? 
                                    <ul className="list-disc mx-7">
                                        {data[0].acf.tasks.map((item,i) => 
                                            <li key={i}>{item.task}</li>
                                        )}
                                    </ul>
                                : null}
                        </div>
                        <div className="w-[100%] lg:w-[50%]">
                            <div className="font-bold">Deliverables</div>
                            {data[0].acf.deliverables.length > 0 ? 
                                <ul className="list-disc mx-7">
                                    {data[0].acf.deliverables.map((item,i) => 
                                        <li key={i}>{item.deliverable}</li>
                                    )}
                                </ul>
                            : null}
                        </div>
                    </div>

                    {data[0].acf.results.length > 0 ? 
                        <div className="py-3 ">
                            {data[0].acf.results.map((item,x) => 
                                <div className="grid grid-cols-2">
                                    <div key={x} className="p-2 border font-bold">{item.result_key}</div>
                                    <div key={x} className="p-2 border" dangerouslySetInnerHTML={{__html: item.result_value }}></div>
                                </div>
                            )}
                        </div>
                    : null}

                    {data[0].acf.case_gallery.length > 0 ?
                        <div className="py-3">
                            <div className="font-bold text-3xl py-5">Gallery</div>
                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 h-[2em]">
                                {data[0].acf.case_gallery.map((item,x) => 
                                    <img key={x} src={item.url} alt="" className="pb-5 w-[100%] object-contain" />
                                )}
                            </div>
                        </div> 
                    :
                        null
                    }
                    {/* 
                    <div className="py-3 flex justify-between flex-wrap lg:flex-nowrap gap-3">
                        <div className="w-[100%] lg:w-[50%] py-2">
                            <div className="flex justify-between flex-wrap lg:flex-nowrap w-[100%]">
                                <div className="w-[100%] lg:w-[50%] py-1 lg:py-0">
                                    <div className="text-[1.5em]">– CLIENT</div>
                                    <div>{data[0].acf.client[0].post_title}</div>
                                </div>
                                <div className="w-[100%] lg:w-[50%] py-1 lg:py-0">
                                    <div className="text-[1.5em]">– SERVICE</div>
                                    <div>{data[0].acf.deliverables[0].deliverable}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[50%]">
                            <div className="py-2 text-[1em] lg:text-[1.5em]" dangerouslySetInnerHTML={{__html: data[0].acf.case_description}}></div>
                        </div>
                    </div> */}
                </div>
            :
                <div className="text-center text-[1.5em] lg:text-[2em]">Load...</div>
            }
        </div>
    )
}

export default DetailWork;