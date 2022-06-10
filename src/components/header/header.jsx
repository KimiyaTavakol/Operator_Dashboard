import React, { Component } from 'react';

class Header extends Component {
    state = {  } 

    render() { 
        return (
            <header className='header' id="header">
                <div className='header_toggle'> <i className='bx bx-menu' id="header-toggle" onClick={this.props.click}></i> </div>
            </header>
        );
    }
}
 
export default Header;