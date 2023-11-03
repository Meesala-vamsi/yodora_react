import Navbar from '../Navbar'

import './index.css'

const BannerSection=()=>(
    <>
    <Navbar/>
    <div className="banner-container">
        <div>
            <div className='banner-alignment-mobile'>
                <h1 className='banner-section-heading'>Learn from your 
                    favorite creators 
                    about <span className='additional-styling'>fantasy reports</span>
                </h1>
                <div className='video-call-container'>
                    <div className='ellipse'>
                        <div className='ellipse-bg'>
                            <h1 className='calls-count'>1:1</h1>
                            <p className='video-call-text'>video calls</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner-alignment-desktop'>
                
                <h1 className='banner-section-heading'>Learn from your 
                    favorite creators 
                    about <span className='additional-styling'>fantasy reports</span>
                </h1>
                <div className='video-call-container'>
                    <div className='ellipse'>
                        <div className='ellipse-bg'>
                            <h1 className='calls-count'>1:1</h1>
                            <p className='video-call-text'>video calls</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
)

export default BannerSection