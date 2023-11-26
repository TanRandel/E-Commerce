import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className=''>
        <div className='descriptionbox-navigator'>
            <div className='description-box-nav-box'>Description</div>
            <div className='description-box-nav-box fade'>Reviews</div>
        </div>
        <div className='description-box-description'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ea dignissimos quia? Corporis deleniti autem perspiciatis ab vitae, asperiores, soluta, optio et debitis quaerat adipisci quis! Enim officiis nostrum soluta!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque fuga cupiditate tempora nulla, laboriosam quae inventore molestias harum delectus ipsa ea accusantium, maxime, earum at doloremque rem veniam quia?</p>
        </div>
    </div>
  )
}

export default DescriptionBox