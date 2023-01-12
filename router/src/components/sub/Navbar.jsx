import { MENUS } from "../../util/data";
import React from "react";
import "../../styles/navbar.css"

export default function Navbar() {
    return (
        <nav>
            {/* {console.log(MENUS)} */}
            <ul>
                {MENUS.map((menu, index) => {
                    // console.log(menu, index);
                    return <li key={index}>
                        <a href={menu.url}>{menu.name}</a>{" "}
                    </li>
                })}
            </ul>
        </nav>
    )
}