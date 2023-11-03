import {Component} from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {TiDelete} from 'react-icons/ti'


import './index.css'

class Navbar extends Component{
    state={clicked:false}

    changeNavbar=()=>{
        this.setState((prevState)=>({clicked:!prevState.clicked}))
    }
    render(){
        const {clicked} = this.state
        const iconStatus = clicked?<TiDelete onClick={this.changeNavbar} className='menu-icon'/>:<CgMenuGridO className='menu-icon' onClick={this.changeNavbar}/>
        const visibleMenu = clicked?'nav-list-items active':'nav-list-items'
        return(
            <nav className='navbar'>
                <div className='container1'>
                    <h1 className='yodora-text'>yodora<span className='dot'>.</span></h1>
                    <ul className={visibleMenu} >
                        <li className='list-items'>Explore</li>
                        <li className='list-items'>Company</li>
                        <li className='list-items'>Support</li>   
                        <li className='list-items mobile-list'>Beacome a member</li>
                        <button type='button' className='signin-btn mobile-list '>Sign in</button>
                    </ul>
                </div>
                <div >
                    <ul className='desktop-nav-list-items'>
                        <li className='list-items'>Beacome a member</li>
                        <button type='button' className='signin-btn '>Sign in</button>
                    </ul>
                </div>
                <div className='mobile-menu'>
                   {iconStatus}
                </div>
            </nav>
        )
    }
}

export default Navbar