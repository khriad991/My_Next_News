"use client"
import {Button, Carousel, IconButton, Typography} from "@material-tailwind/react";


export  async function Slider({slider}) {
    return (
        <Carousel className="rounded">
            {
                slider.map((item,i)=>{
                    if( i < 5){
                        return (
                            <div key={i} className="relative h-full w-full">
                                <img
                                    src={item['img1']}
                                    alt="image 1"
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">

                                        <div  className="w-3/4 text-center md:w-2/4">
                                            <a href={`/details?newsID=${item['id']}`}>

                                                <Typography
                                                    variant="h1"
                                                    color="white"
                                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                                >
                                                    {item['title']}
                                                </Typography>
                                                <Typography
                                                    variant="lead"
                                                    color="white"
                                                    className="mb-12 opacity-70"
                                                >
                                                    {item['logn_des'].slice(0,304)}
                                                </Typography>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        )}})
            }
        </Carousel>
    );
}

export default Slider