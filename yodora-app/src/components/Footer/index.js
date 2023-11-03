import {AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'
import {SlSocialTwitter} from 'react-icons/sl'

import './index.css'

const Footer=()=>(
    <div className='footer-container'>
        <div className='desktop-sub-footer-container'>
            <h1 className='yodora-footer-text'>yodora<span className='dot'>.</span></h1>
            <div className='footer-icons-container'>
                <AiOutlineFacebook className='footer-icon'/>
                <SlSocialTwitter className='footer-icon'/>
                <AiOutlineInstagram className='footer-icon'/>
            </div>
        </div>
        <ul className='footer-list-container'>
            <li className='footer-list-items'>
                <h1 className='footer-heading'>About</h1>
                <p className='footer-desc'>How it works</p>
                <p className='footer-desc'>Company</p>
                <p className='footer-desc'>Help & support</p>
            </li>
            <li className='footer-list-items'>
                <h1 className='footer-heading'>For creators</h1>
                <p className='footer-desc'>How can I get paid</p>
                <p className='footer-desc'>Become a creator</p>
            </li>
            <li className='footer-list-items'>
                <h1 className='footer-heading'>Learn</h1>
                <p className='footer-desc'>Blog</p>
                <p className='footer-desc'>Cookies policy</p>
                <p className='footer-desc'>Privacy policy</p>
            </li>
            <li className='footer-list-items'>
                <h1 className='footer-heading'>About</h1>
                <p className='footer-desc'>How it works</p>
                <p className='footer-desc'>Company</p>
                <p className='footer-desc'>Help & support</p>
            </li>
        </ul>
        <div className='mobile-sub-footer-container'>
            <h1 className='yodora-footer-text'>yodora<span className='dot'>.</span></h1>
            <div className='footer-icons-container'>
                <AiOutlineFacebook className='footer-icon'/>
                <SlSocialTwitter className='footer-icon'/>
                <AiOutlineInstagram className='footer-icon'/>
            </div>
        </div>
    </div>
)

export default Footer