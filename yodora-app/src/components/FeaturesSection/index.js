import './index.css'

const FeaturesSection = ()=>(
    <div className='features-main-container'>
    <div className='features-section-container'>
        <div className='container3'>
            <h3 className='features-setion-heading'>Why become a creator?</h3>
            <p className='features-section-desc'>Engage with your supporter and subscriber to sell your skills, knowledge and passions </p>
            <button className='creator-btn'>Become a creator</button>
        </div>
        <div className='grid-container'>
            <div className='sub-grid-container'>
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1698999599/Group_y5d6nn.png' alt='grid-img' className='shapes'/>
                <h1 className='grid-heading'>Engagement</h1>
                <p className='grid-desc'>Engage on a deeper level with the fans that matter most</p>
            </div>
            <div className='sub-grid-container'>
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1698999572/Group_1_eoccwx.png' alt='grid-img' className='shapes'/>
                <h1 className='grid-heading'>Autonoomy</h1>
                <p className='grid-desc'>Full autonomy on when and who you talk to.</p>
            </div>
            <div className='sub-grid-container'>
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1698999560/free-svg_awfgqt.png' alt='grid-img' className='shapes'/>
                <h1 className='grid-heading'>Free</h1>
                <p className='grid-desc'>No monthly fee or sign-up fee</p>
            </div>
            <div className='sub-grid-container'>
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1698999586/earn-svg_abrysa.png' alt='grid-imge' className='shapes'/>
                <h1 className='grid-heading'>Earn</h1>
                <p className='grid-desc'>Add a new source of income that you can control</p>
            </div>
        </div>
        

    </div>
    <div className='cta-container'>
            <h1 className='cta-heading'>Engage without limits</h1>
            <p className='cta-description'>Join a growing community and talk directly with your favorites creators</p>
            <button className='start-btn'>Get Started</button>
        </div>
    </div>
)

export default FeaturesSection