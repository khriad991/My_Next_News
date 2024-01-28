
import Link from "next/link";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {GrInstagram} from "react-icons/gr";

const Footer =async (props) => {
    const  data =await props.category.splice(0,5)
    return (
        <div className="bg-black text-white py-10">
            <div className="container ">
                <div className=" flex justify-between  w-full flex-col md:flex-row gap-y-10  ">
                    <div className="w-full basis-4/12 flex flex-col gap-y-4">
                        <h1 className="text-4xl font-bold">web logo</h1>
                        <p className="text-lg font-normal mr-16 text-justify">Some footer text about the  Agency. Just a  little <br/>description to help people understand you better</p>
                        <div className="icon-box flex justify-start items-center gap-x-1">
                            <Link className="bg-green3 w-10 h-10 centerFlex rounded-full" href="#">
                                <FaFacebook className="text-xl bg-transparent text-white font-bold " />
                            </Link>
                            <Link className="bg-green3 w-10 h-10 centerFlex rounded-full" href="#">
                                <AiFillTwitterCircle className="text-xl bg-transparent text-white font-bold " />
                            </Link>
                            <Link className="bg-green3 w-10 h-10 centerFlex rounded-full" href="#">
                                <FaLinkedinIn className="text-xl bg-transparent text-white font-bold " />
                            </Link>
                            <Link className="bg-green3 w-10 h-10 centerFlex rounded-full" href="#">
                                <GrInstagram className="text-xl bg-transparent text-white font-bold " />
                            </Link>

                        </div>
                    </div>
                    <div className="w-full basis-2/12 flex flex-col gap-y-2">
                        <h4 className="text-lg font-semibold font-avenir capitalize">quick link</h4>
                        <Link href="/latest" className="text-lg text-gray-300 hover:text-white transition-all duration-300 font-medium capitalize ">Latest News</Link>
                        <Link href="/popular" className="text-lg text-gray-300 hover:text-white transition-all duration-300 font-medium capitalize ">Popular News </Link>
                        <Link href="/" className="text-lg text-gray-300 hover:text-white transition-all duration-300 font-medium capitalize ">Home</Link>
                    </div>
                    <div className="w-full basis-2/12 flex flex-col gap-y-1">
                        <h4 className="text-lg font-semibold capitalize">categories</h4>
                        {
                            data.map((item,i)=>{
                                return (
                                    <Link key={i} href={`/category?catID=${item["id"]}`}
                                          className="text-lg text-gray-300 hover:text-white transition-all duration-300 font-medium capitalize">
                                        {item["name"]}
                                    </Link>
                                )})
                        }
                     </div>
                    <div className="w-full basis-4/12 flex flex-col gap-y-4">
                        <h4 className="text-lg font-semibold font-avenir capitalize">address</h4>
                        <p className="text-lg text-[#fff] font-avenir font-medium capitalize ">
                            Design Agency Head Office <br/>
                            Airport Road <br/>
                            United Arab Emirate
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;