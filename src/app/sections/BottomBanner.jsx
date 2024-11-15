import React from "react";
import Image from "next/image";

function BottomBanner() {

    const contacts=[
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact1.png",
            title:"Phone Number",
            value:"+974 3118 1843"
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact2.png",
            title:"Email Address",
            value:"elbrithcqhr@gmail.com"
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/contact3.png",
            title:"Office Location",
            value:"Ambassador Street, Zone 61"
        }
    ]

    return (
        <div className="w-full flex flex-col items-center px-4 bg-[#17414F]">
            <div className="w-full md:max-w-[75%] min-w-[50%] bg-[#BCE7F5] rounded-lg flex gap-12 justify-between -translate-y-[120px]">
                <div className="w-full lg:w-[50%] ps-8 pt-8 pe-4 pb-12">
                    <p className="text-sm font-semibold text-[#41BAE3]">NEWSLETTER</p>
                    <h1 className="w-[100%] md:w-[70%] text-4xl font-bold my-3 text-[#17414F]">Take Charge of Your Health Today</h1>
                    <p className="text-[#808283] text-sm my-4">Sign-up to get news on our latest additions, current health news as well as helpful guides.</p>
                    <form className="flex flex-col md:flex-row gap-4">
                        <input className="h-fit w-fit px-4 py-2 rounded-3xl" type="email" placeholder="Email address" required/>
                        <button className="ps-8 pe-12 w-fit bg-[#17414F] font-medium py-3 rounded-3xl text-sm text-white" type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="hidden lg:flex w-full md:w-[50%] flex justify-center">
                    <Image className="w-[70%] -translate-y-[5%]" src="https://ik.imagekit.io/balaharisankar/elbrit/bottom-banner.png?updatedAt=1731683246258" alt="banner" loading="lazy" />
                </div>
            </div>
            <div className="w-full md:max-w-[75%] min-w-[50%] flex gap-4 flex-wrap  justify-center -translate-y-[60px]">
                {
                    contacts?.map((contact,index)=>{
                        return(
                            <div className="w-[300px] text-white bg-[#215D72] px-3 py-2 rounded-lg flex gap-2 items-center" key={index}>
                                <Image className="scale-75" src={contact?.url} alt="contact elbrit"/>
                                <div>
                                    <p className="font-light">{contact?.title}</p>
                                    <p className="font-medium">{contact?.value}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BottomBanner;