import React from "react";
import {Logo} from "./logo/Logo";
import {Search} from "./search/Search";
import {Icons} from "./icons/Icons";

import './Top.css';

export const Top = () => {
    return (
        <div className="top">
            <Logo/>
            <Search/>
            <Icons/>
        </div>
    )
}