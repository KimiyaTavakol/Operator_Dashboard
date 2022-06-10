import React, { Component } from 'react';
import Logo from '../../MyIrancell.svg'


class SideMenu extends Component {
    state = {  } 
    render() { 
        return (
            <div className='l-navbar' id="nav-bar">
                <nav className="nav">
                    <div> 
                        <div className="nav_logo"> 
                        <img src={Logo} width='25' />
                        <span className="nav_logo-name">ایرانسل من</span> 
                        </div>
                        <div className="nav_list"> 
                        <a href="#" className="nav_link active"> 
                        <i className='bx bx-home nav_icon'></i> 
                        <span className="nav_name">صفحه اصلی</span> 
                        </a>
                        <a href="#" className="nav_link"> 
                        <i className='bx bxs-plus-square nav_icon'></i> 
                        <span className="nav_name">شارژ سیمکارت</span> 
                        </a> 
                        <a href="#" className="nav_link">
                             <i className='bx bx-planet nav_icon'></i> 
                             <span className="nav_name">اینترنت</span> 
                             </a> 
                             <a href="#" className="nav_link">
                                <i className='bx bx-bar-chart-square nav_icon'></i> 
                                <span className="nav_name">کارکرد و فروش</span> 
                                </a> 
                                <a href="#" className="nav_link"> 
                                <i className='bx bx-scan nav_icon'></i> 
                                <span className="nav_name">خدمات</span> 
                                </a> 
                                <a href="#" className="nav_link"> 
                                <i className='bx bx-category nav_icon'></i> 
                                <span className="nav_name">مدیرت خدمات</span> 
                                </a> 
                                <a href="#" className="nav_link"> 
                                <i className='bx bx-chart nav_icon'></i> 
                                <span className="nav_name">مدیریت سیمکارت</span> 
                                </a>
                                <a href="#" className="nav_link"> 
                                <i className='bx bx-spreadsheet nav_icon'></i> 
                                <span className="nav_name">سوالات متداول</span> 
                                </a>
                                <a href="#" className="nav_link"> 
                                <i className='bx bx-support nav_icon'></i> 
                                <span className="nav_name">ارتباط با ما</span> 
                                </a>
                                </div>
                    </div> 
                </nav>
            </div>
        );
    }
}
 
export default SideMenu;