import React, { Component } from 'react';
import Logo from '../../MyIrancell.svg'

class Header extends Component {
    state = {  } 

    render() { 
        return (
            <header className='header' id="header">
                <div className='header_toggle'> <i className='bx bx-menu' id="header-toggle" onClick={this.props.click}></i> </div>
                
                <div  style={{width: '15rem'}}>
                    <div className='row'>
                        <div className='col-md-8'>
                            <span>
                                سلام کیمیا توکل
                                <br/>
                                09012030405
                            </span>
                        </div>
                        <div className='col-md-4'>
                            <img src={Logo} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;