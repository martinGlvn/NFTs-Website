import React from 'react';
import Button from '../../common/Button';
import './topFold.css';

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading'>
            Discover collect, & sell{""}
            <span className='heading-gradient'> Extraordinary</span> NFTs 
        </div>
        <div className='tf-description'>
          Please make sure that your are buying and selling the most trending
          NFTs out there. Welcome to my channel Developer's Den
        </div>
        <div className='tf-left-btns'>
          <Button btnType="PRIMARY" btnText='EXPLORE'/>
          <Button 
            btnType="SECONDARY"
            btnText='Create' 
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className=' tf-left-infoStats'>
        
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>200K+</div>
            <div className='tf-infoItem-label'>Collections</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>10K+</div>
            <div className='tf-infoItem-label'>Artists</div>
          </div>

          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>423K+</div>
            <div className='tf-infoItem-label'>Community</div>
          </div>
          
        </div>
      </div>
      
      <div className='tf-right'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>

          <div className='tf-r-diamond-item absolute-center'>
              <img 
              className='tf-r-diamond-img'
              alt="diamond-banner" 
              src='https://openseauserdata.com/files/24ed399dc3e5430b39a1db656f68c67c.gif'
              />
          </div>

          <div className='tf-r-diamond-item absolute-center'>
              <img 
              className='tf-r-diamond-img'
              alt="diamond-banner" 
              src='https://openseauserdata.com/files/51cc433516833993eed5e04a5b751972.gif'
              />
          </div>

          <div className='tf-r-diamond-item absolute-center'>
              <img 
              className='tf-r-diamond-img'
              alt="diamond-banner" 
              src='https://openseauserdata.com/files/2a612d58a37abecd1458330b47e678e6.gif'
              />
          </div>

          <div className='tf-r-diamond-item absolute-center'>
              <img 
              className='tf-r-diamond-img'
              alt="diamond-banner" 
              src='https://openseauserdata.com/files/89e468471b05a0d3f49b0b14def8879a.gif'
              />
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopFold