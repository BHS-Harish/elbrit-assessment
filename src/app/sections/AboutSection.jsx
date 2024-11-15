import React from "react";

function AboutSection(){
    return(
        <div className="w-full flex flex-col gap-20 items-center px-4 py-24 bg-[#E2F5FB] rounded-tl-[120px] md:rounded-tl-[200px]">
            <About/>
            <Service/>
            <Offer/>
        </div>
    )
}

const About=()=>{
    return(
        <div className="md:max-w-[75%] w-full flex flex-col gap-12 md:flex-row">
            <div className="w-full flex justify-center md:w-[50%]">
                <img className="w-[100%] sm:w-[50%] md:w-[100%] h-fit" src="https://ik.imagekit.io/balaharisankar/elbrit/about1.png" alt="about elbrit" loading="lazy"/>
            </div>
            <div className="w-full md:w-[50%]">
                <p className="text-sm font-semibold text-blue-950">ABOUT EVE PHARMACY</p>
                <h1 className="w-[100%] md:w-[50%] text-4xl font-bold my-3 text-[#17414F]">Supercharge Your Health</h1>
                <p className="text-[#808283] text-sm my-4">Adjacent to the Elbrit Health Center, Eve Pharmacy brings you the best in medicines and healthcare products at an accessible location - with a wide range of choices including products made right here in India!</p>
                <p className="text-[#808283] text-sm my-4">When you shop at Eve Pharmacy, you can trust in our quality - we apply the highest levels of quality checks on all our medical and non-medical products. Visit our pharmacy today, for all healthcare needs!</p>
                <p className="text-[#17414F] font-semibold w-full md:w-[60%]">We offer choice, reliability and value That’s what makes us better </p>
                <button className="ps-8 pe-12 w-fit bg-[#17414F] font-medium py-3 mt-4 rounded-3xl text-sm text-white">ABOUT US</button>
            </div>
        </div>
    )
}

const Service=()=>{
    return(
        <div className="md:max-w-[75%] w-full flex flex-col gap-12 md:flex-row">
            <div className="w-full md:w-[50%]">
                <div className="w-[50px] h-[50px] mb-3 bg-[#FEC12B] rounded-tl-[50%] rounded-br-[50%]">

                </div>
                <p className="text-sm font-semibold text-blue-950">SPECIAL SERVICE</p>
                <h1 className="w-[100%] md:w-[75%] text-4xl font-bold my-3 text-[#17414F]">Feel Better Or Your Money Back</h1>
                <p className="text-[#808283] text-sm my-4">With our commitment to providing safe and effective medical and healthcare products, you can rest assured when you buy from Eve Pharmacy.</p>
                <p className="text-[#17414F] font-semibold w-full md:w-[60%]">A full 60 days money back gaurantee, no question asked</p>
                <button className="ps-8 pe-12 w-fit bg-white text-[#17414F] border-2 border-[#17414F] font-medium py-3 mt-4 rounded-3xl text-sm">EXPLORE NOW</button>
            </div>
            <div className="w-full flex justify-center md:w-[50%]">
                <img className="w-[100%] sm:w-[50%] md:w-[100%] h-fit" src="https://ik.imagekit.io/balaharisankar/elbrit/about2.png" alt="about elbrit" loading="lazy"/>
            </div>
        </div>
    )
}

const Offer=()=>{
    return(
        <div className="md:max-w-[75%] w-full flex flex-col gap-12 md:flex-row">
            <div className="w-full flex justify-center md:w-[50%]">
                <img className="w-[100%] sm:w-[50%] md:w-[100%] h-fit" src="https://ik.imagekit.io/balaharisankar/elbrit/about3.png" alt="about elbrit" loading="lazy"/>
            </div>
            <div className="w-full md:w-[50%]">
                <p className="text-sm font-semibold text-blue-950">BEST OFFERS</p>
                <h1 className="w-[100%] text-4xl font-bold my-3 text-[#17414F]">Start Feeling Better</h1>
                <p className="text-[#808283] text-sm my-4">Dont wait -  get the right medicine and the right time. Our shelves are stocked and ready to fulfill your needs so that you can feel better today</p>
                <button className="ps-8 pe-12 w-fit bg-[#17414F] font-medium py-3 mt-4 rounded-3xl text-sm text-white">BUY NOW</button>
            </div>
        </div>
    )
}

export default AboutSection;