import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
    return (
        <div className="w-full flex flex-col items-center gap-8 px-4 bg-[#17414F]">
            <div className="w-full md:max-w-[90%] min-w-[50%] flex flex-wrap gap-12 md:justify-center">
                <div className="w-[300px] flex flex-col gap-4">
                    <img className="bg-white p-2" src="https://ik.imagekit.io/balaharisankar/elbrit/elbrit-logo.png" alt="elbrit" />
                    <p className="text-white text-sm leading-[24px]">our health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
                    <div className="flex gap-3">
                        <div className="w-fit rounded-[50%] p-2 bg-[#41BAE3]">
                            <FaFacebook className="text-white text-2xl" />
                        </div>
                        <div className="w-fit rounded-[50%] p-2 bg-[#41BAE3]">
                            <FaTwitter className="text-white text-2xl" />
                        </div>
                        <div className="w-fit rounded-[50%] p-2 bg-[#41BAE3]">
                            <FaInstagram className="text-white text-2xl" />
                        </div>
                        <div className="w-fit rounded-[50%] p-2 bg-[#41BAE3]">
                            <FaPinterest className="text-white text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="w-[200px]">
                    <h1 className="text-white text-xl font-semibold">Community</h1>
                    <ul className="ms-4 mt-3">
                        <li className="list-disc text-white text-sm my-1 cursor-pointer font-light">Help Center</li>
                        <li className="list-disc text-white text-sm my-1 cursor-pointer font-light">Publishers</li>
                        <li className="list-disc text-white text-sm my-1 cursor-pointer font-light">Affliates</li>
                        <li className="list-disc text-white text-sm my-1 cursor-pointer font-light">Blog</li>
                        <li className="list-disc text-white text-sm my-1 cursor-pointer font-light">Careers</li>
                    </ul>
                </div>
                <div className="w-[300px]">
                    <h1 className="text-white text-xl font-semibold">Galleries</h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {
                            ["1", "2", "3", "4", "5", "6"].map((value, index) => {
                                return (
                                    <img className="w-[90px]" src={`https://ik.imagekit.io/balaharisankar/elbrit/gallery${value}.png`} key={index} alt="gallery elbrit" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-[200px]">
                    <h1 className="text-white text-xl font-semibold">About Us</h1>
                    <ul className="ms-4 mt-3">
                        <li className="list-disc text-white font-light text-sm my-1 cursor-pointer">Contact Us</li>
                        <li className="list-disc text-white font-light text-sm my-1 cursor-pointer">How It Works</li>
                        <li className="list-disc text-white font-light text-sm my-1 cursor-pointer">Create</li>
                        <li className="list-disc text-white font-light text-sm my-1 cursor-pointer">Explore</li>
                        <li className="list-disc text-white font-light text-sm my-1 cursor-pointer">Terms & Service</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:max-w-[90%] min-w-[50%] flex flex-wrap gap-4 justify-between py-8 border-t">
                    <div className="text-white flex gap-2 text-xs">
                        <CiLocationOn className="text-lg"/>
                        <p>Elbrit Life Science Private Limited. C20,BKG, G Block, Mumbai - 400051</p>
                    </div>
                    <p className="text-white text-xs">
                        &copy; Copyright 2024 ELBRIT
                    </p>
            </div>
        </div>
    )
}

export default Footer;