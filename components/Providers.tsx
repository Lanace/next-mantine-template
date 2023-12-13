"use client";

import { MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "../theme";

import '@mantine/carousel/styles.css';

const Providers: React.FC<React.PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    )
}

export default Providers;
