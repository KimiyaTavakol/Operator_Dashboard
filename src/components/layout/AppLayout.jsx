import { Outlet } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
import SideMenu from "../sidebar/sideMenu";
// import '../sidebar/sidebar.scss';
import Header from "../header/header";

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/menu';
import '../assets/menu.css';
import { Component } from "react";



class AppLayout extends Component{
    
    toggleClick = () => {
        const toggle = document.getElementById('header-toggle');
        const nav = document.getElementById('nav-bar');
        const bodypd = document.getElementById('body-pd');
        const headerpd = document.getElementById('header');
    

        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
    };

    render(){
    return <div>
        <Header 
        click={this.toggleClick} />
        <SideMenu />
    </div>;
}};

export default AppLayout;
