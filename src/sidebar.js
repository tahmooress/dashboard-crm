import React from "react";
import {Link} from "react-router-dom";
import "./style.css"
class SideBar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <h2>dashboard</h2>
                <ul className="side">
                    <Link to="/stores">
                        <li>داروخانه‌ها</li>
                    </Link>
                    <Link to="/add-store">
                        <li>داروخانه جدید</li>
                    </Link>
                    <Link to="/products">
                        <li>محصولات</li>
                    </Link>
                    <Link to="add-product">
                        <li>محصول جدید</li>
                    </Link>
                    <Link to="/reports">
                        <li>گزارش‌ها</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default SideBar;