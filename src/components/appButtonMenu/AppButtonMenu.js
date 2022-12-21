import './appButtonMenu.scss';
import {useState} from "react";

function AppButtonMenu({name}) {

    return (
        <div className="appButtonMenu">
            <a href="#">{name}</a>
        </div>
    );
}

export default AppButtonMenu;