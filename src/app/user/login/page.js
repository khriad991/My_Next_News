import React from 'react';
import MainLayout from "@/components/main/MainLayout";
import SingUpFrom from "@/components/user/SingUpFrom";
import LoginFrom from "@/components/user/loginFrom";

const Page = () => {
    return (
        <MainLayout>
            <LoginFrom/>
        </MainLayout>
    );
};

export default Page;