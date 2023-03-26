import React from 'react'
import './brand.css'
import google from '../../assets/assets/google.png';
import slack from '../../assets/assets/slack.png';
import dropbox from '../../assets/assets/dropbox.png';
import shopify from '../../assets/assets/shopify.png';
import atlassian from '../../assets/assets/atlassian.png';


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google}/>
      </div>
      <div>
        <img src={atlassian}/>
      </div>
      <div>
        <img src={shopify}/>
      </div>
      <div>
        <img src={slack}/>
      </div>
      <div>
        <img src={dropbox}/>
      </div>
    </div>
  )
}

export default Brand
