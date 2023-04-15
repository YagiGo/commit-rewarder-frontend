import React from 'react';
import './index.css';
const GlassmorphismCard = ({imgSrc, repoUrl, description}) => {
  console.log(imgSrc);
  return (
    <div
      className='card-container'
      onClick={() => window.open(repoUrl, '_blank')}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className='card-wrapper'>
        <div className='card-content'>
          {/*<img alt='badge' src={imgSrc} width={512} height={512} />*/}
          <p>{description}</p>
          <div className={'more-btn'}>Read More</div>
        </div>
      </div>
    </div>

  );
}

export default GlassmorphismCard;