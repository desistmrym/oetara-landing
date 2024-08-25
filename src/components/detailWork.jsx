import { useEffect, useState } from "react";
import { apiUrl } from "../etc/helper";
import { useParams } from "react-router-dom";
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
        <div className="p-2 lg:p-5">
            {data.length > 0 ? 
                <div key={data[0].id} className="font-['europa-grotesk-sh-med']">
                    {data[0].acf.case_gallery.length > 1 ? 
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <img src={data[0].acf.case_gallery[0].sizes.large} alt="" className="w-[100%] lg:h-[96vh] object-contain" />
                            <img src={data[0].acf.case_gallery[1].sizes.large} alt="" className="w-[100%] lg:h-[96vh] object-contain" />

                        </div>
                    :
                        <img src={data[0].acf.case_gallery[0].sizes.large} alt="" className="w-[100%] h-[96vh] object-contain" />
                    }
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
                            <div className="text-[2em] lg:text-[3em] text-[#d43735]" dangerouslySetInnerHTML={{__html: data[0].title.rendered}} ></div>
                            <div className="py-2 text-[1em] lg:text-[1.5em]" dangerouslySetInnerHTML={{__html: data[0].acf.case_description}}></div>
                        </div>
                    </div>
                </div>
            :
                <div className="text-center text-[1.5em] lg:text-[2em]">No Data</div>
            }
        </div>
    )
}

export default DetailWork;