import React from "react";
import 'boxicons';
import './Search.css';

export const Search = () => {
    return (
        <form className="form-search">
            <input type="text" placeholder="Search product here..." name="search" className="input-search"/>
            <button className="search-btn"><box-icon className="search" name='search'/>Search</button>
        </form>
    )
}