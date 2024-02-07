import React, { ReactNode } from 'react';
import Headerx from "@/components/headerx";


export default function DefaultLayout({ children }) {

    return (
        <>
            <Headerx/>
            <main>{children}</main>


        </>
    );
};

