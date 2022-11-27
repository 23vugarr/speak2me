import { prices } from '../../data'

const Price = () => {
  return (
    <div className='price' id='price-container'>
      <div className='price-container'>
        <h1>Go Premium Today!</h1>
        <span id='subtitle'>Choose the best package for your needs.</span>
        <h2>Pricing</h2>
        <div className='cards-container'>
          {prices.map((item, index) => (
            <div key={index} className='card-container'>
              <h3>{item.title}</h3>
              <div className='info-package'>
                <span>{item.subtitle}</span>
              </div>
              <div className='show-price'>
                <div id='price-number'>{item.price}</div>
                <div className='month'>
                  <span>$</span>
                  <span>Per Month</span>
                </div>
              </div>
              {item.access.map((data, index) => (
                <div key={index} className='access-container'>
                  <span className="checkmark">
                    <div className="checkmark_circle"></div>
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </span>
                  <span className='access-text'>{data}</span>
                </div>
              ))}
              <div id='btn'>
                <button>Purchase</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Price