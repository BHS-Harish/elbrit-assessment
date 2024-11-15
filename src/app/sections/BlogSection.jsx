import React from "react";

function BlogSection(){
    const blogs=[
        {
            url:'https://ik.imagekit.io/balaharisankar/elbrit/blog1.png',
            date:"20 APR",
            desc:"The Covid-19 Epidemic In 2022 is Back"
        },
        {
            url:'https://ik.imagekit.io/balaharisankar/elbrit/blog2.png',
            date:"17 APR",
            desc:"The Covid-19 Epidemic In 2023 is Back"
        },
        {
            url:'https://ik.imagekit.io/balaharisankar/elbrit/blog1.png',
            date:"20 APR",
            desc:"The Covid-19 Epidemic In 2022 is Back"
        },
        {
            url:'https://ik.imagekit.io/balaharisankar/elbrit/blog2.png',
            date:"17 APR",
            desc:"The Covid-19 Epidemic In 2023 is Back"
        }
    ]
    return(
        <div className="w-full flex flex-col items-center pt-12 pb-48">
            <p className="text-center text-blue-950 font-semibold text-sm">OUR BLOG</p>
            <h3 className="text-2xl font-bold text-center my-2 text-green-950">Lastest News</h3>
            <div className="w-full flex min-h-[500px] flex-wrap justify-center gap-8 mt-12">
                {
                    blogs?.map((blog,index)=>{
                        return(
                            <div className={`w-[280px] relative ${index%2!=0?"self-end":"self-start"} `} key={index}>
                                <img className="brightness-50 rounded-2xl" src={blog?.url} alt="elbrit" loading="lazy"/>
                                <p className="w-fit  px-5 py-2 rounded-r-3xl text-white font-medium text-xs absolute top-5 -left-2 bg-blue-950">{blog?.date}</p>
                                <p className="w-fit  px-5 py-2 rounded-r-3xl text-white font-bold text-md  absolute top-20 left-4">{blog?.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection;