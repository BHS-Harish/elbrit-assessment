import React from "react";
import Image from "next/image";

function ProductSection(){

    const products=[
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/product1.png",
            name:"Voluptas assumenda est",
            dis:27
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/product2.png",
            name:"Pamol Film Coated Tablet",
            dis:6
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/product3.png",
            name:"Maca Root Capsules",
            dis:0
        },
        {
            url:"https://ik.imagekit.io/balaharisankar/elbrit/product4.png",
            name:"Diclofenec Oaifarm Tablet",
            dis:16
        },
    ]

    return(
        <div className="w-full flex flex-col items-center pb-24">
            <p className="text-center font-semibold text-sm text-blue-950">OUR PRODUCTS</p>
            <h3 className="text-2xl font-bold text-center my-2 text-green-950">New Arrivals</h3>
            <div className="flex justify-center flex-wrap gap-8 py-12">
                {
                    products?.map((product,index)=>{
                        return(
                            <Product product={product} key={index}/>
                        )
                    })
                }
            </div>
            <p className="w-fit text-center text-[#2D3F59] font-semibold border-b-2 border-[#2D3F59] cursor-pointer">See More</p>
        </div>
    )
}

const Product=({product})=>{
    return(
        <div className="flex flex-col gap-2">
            <div className="w-[280px] bg-[#F5F5F5] relative">
                <Image src={product?.url} alt="products"/>
                {
                    product?.dis!=0&&(
                        <p className="bg-[#FFC12B] absolute top-5 right-5 px-2 py-1 text-sm text-white font-medium rounded-lg">-{product?.dis}%</p>
                    )
                }
            </div>
            <p>⭐</p>
            <p className="text-[#2D3F59] font-medium">{product?.name}</p>
        </div>
    )
}

export default ProductSection;