import React from 'react';
import './index.css';
const GlassmorphismCard = ({imgSrc, repoUrl}) => {
  return (
    <div className='card-container' onClick={() => window.open(repoUrl, '_blank')}>
      <div className='card-wrapper'>
        <div className='card-content'>
          <img alt='badge' src={imgSrc} width={512} height={512} />
          <div className={'more-btn'}>Read More</div>
        </div>
      </div>
    </div>

  );
}

export default GlassmorphismCard;