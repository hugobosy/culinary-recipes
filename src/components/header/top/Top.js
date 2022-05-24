import React from "react";
import {Logo} from "./logo/Logo";
import {Search} from "./search/Search";

export const Top = () => {
    return (
        <div className="top">
            <Logo/>
            <Search/>
            {/*<Icons/>*/}
        </div>
    )
}