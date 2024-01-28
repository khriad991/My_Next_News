import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <div className="py-10">



            <div className="container">
                <div className="flex justify-between items-center flex-row">
                    <div className="flex-1 flex flex-col gap-y-4">
                        <h1>10 Life-Changing Hacks Every Working Mom Should Know</h1>
                        <h2>10 Life-Changing Hacks Every Working Mom Should Know</h2>
                        <p>10 Life-Changing Hacks Every Working Mom Should Know</p>

                    </div>
                    <div className="flex-1] ">
                        <img className='w-full object-center' src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-6.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;