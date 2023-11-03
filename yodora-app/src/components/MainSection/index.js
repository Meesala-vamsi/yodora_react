import {IoIosArrowForward} from 'react-icons/io'

import './index.css'

const MainSection =()=>(
    <div className='main-section-container'>
        <div className='team-image-container'>
            <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1699007188/img_muin2r.svg" className='team-members-image-desktop' alt="team-members"/>
            <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1698988344/imgmain_izwr1j.png" className='team-members-image' alt="team-members"/>
        </div>
        <div>
        <h2 className='main-section-heading'><span className='additional-styling'>Get direct </span>
            knowledge and insight.
        </h2>
        </div>
        <div className='images-conatiner'>
            <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1698993588/img-card_1_c8ftiw.png" alt="img-card" className='img-card' />
            <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1698993461/img-card_uajdoj.png" alt="img-card" className='img-card'/>
            <img src="https://res.cloudinary.com/db0f83m76/image/upload/v1698993554/img-cardimg3_2_ttikt4.png" alt="img-card" className='img-card'/>
        </div>
        <div className='details-container'>
            <div className='sub-detail-container'>
                <h3 className='numerical-content'>300</h3>
                <p className='numrical-fields'>creators</p>
            </div>
            <div className='sub-detail-container'>
                <h3 className='numerical-content'>14.4k</h3>
                <p className='numrical-fields'>users</p>
            </div>
            <div className='sub-detail-container'>
                <h3 className='numerical-content'>9.11k</h3>
                <p className='numrical-fields'>session</p>
            </div>
            <div className='explore-container'>
                <p className='explore-description'>Explore the marketplace</p>
                <IoIosArrowForward className='forward-arrow'/>
            </div>
        </div>
    </div>
)

export default MainSection