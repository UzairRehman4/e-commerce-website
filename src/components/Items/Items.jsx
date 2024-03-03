/* eslint-disable react/prop-types */
import './Item.css'


const Items = ({ image, name, new_price, old_price }) => {
      return (
            <div className='item'>
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <div className="item-prices">
                        <div className="item-price-new">
                              ${new_price}
                        </div>
                  </div>
                  <div className="item-price-old">
                        ${old_price}
                  </div>
            </div>
      )
}

export default Items;
