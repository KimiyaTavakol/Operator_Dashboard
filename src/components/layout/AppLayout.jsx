import { Component } from "react";
import SideMenu from "../sidebar/sideMenu";
import Header from "../header/header";

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/menu.css';
import UsingChart from '../chart/usingChart'
import '../assets/LayoutStyles.css';
import SuggestionPanel from "../panels/suggestionPanel";
import LeftPanel from "../panels/leftPanel";





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
        <div className="row main-row">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-12" >
                        <div className="chart-container canvas-size">
                            <UsingChart />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <hr />
                        <SuggestionPanel/>
                    </div>
                </div>
            </div>
            <LeftPanel/>
        </div>
    </div>;
}};

export default AppLayout;
