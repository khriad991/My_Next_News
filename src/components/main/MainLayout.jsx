import React, {Fragment} from 'react';
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";
import Slider from "@/components/main/Slider";

const getData = async () => {
    const categories = (await (await fetch(`${process.env.HOST}/api/category/find`)).json())['data'];
    const socials = (await (await fetch(`${process.env.HOST}/api/socials/list`)).json())['data']
    return {categories ,socials}

}

const MainLayout =async (props) => {
    const data = (await getData()).categories
    const socials = (await getData()).socials

    return (
        <Fragment>
            <NavBar category={data} socials={socials}/>

            {props.children}
            <Footer category={data} />
        </Fragment>
    );
};

export default MainLayout;