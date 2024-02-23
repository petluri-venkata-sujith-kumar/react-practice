import { createContext } from "react";

export const ThemeContextApi=createContext()

export const theme={
    light:{
        foreground:"#000",
        background:"#fff",
        color:"#000"
    },
    dark:{
        foreground:"#fff",
        background:"#111",
        color:"#fff"
    }
}