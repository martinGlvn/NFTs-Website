import React from 'react'
import './trendingCard.css'



const TrendingCard = (props) => {
    const { nft } = props;

  return (
    <div className='trending-card absolute-center'>
      <div className='tc-inner-wrapper'>
        <div className='tc-content'>
            <img alt={nft.user_name} src={nft.banner} className='tc-banner'/>
            <div className='tc-user-info'>

                <div className='tc-ui-left'>
                  <img                  
                    alt={nft.user_name}
                    className='tc-user-logo'
                    src={nft.user_photo} 
                  />
                <div>
                  <div className='tc-ui-username'>{nft.user_name}</div>
                  <div className='tc-ui-userhandle'>{nft.userhandle}</div>
                </div>
                  <img
                    alt="ETH ON SOLANA"
                    className='tc-solana-logo'
                    src="https://i.ibb.co/yV9RSck/eth-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment-95753.png"
                  />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
  
}

export default TrendingCard