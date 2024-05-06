import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Contexts/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull} alt=''/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>Rp. {product.old_price}</div>
                <div className='productdisplay-right-prices-new'>Rp. {product.new_price}</div>
            </div>
            <div className='productdisplay-right-desc'>
                Description
            </div>
            <div className='productdisplay-right-bundle'>
                <h1>Select Bundle</h1>
                <div className='productdisplay-right-bundles'>
                <div>Bundle A</div>
                <div>Bundle B</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-display-category'><span>Category : </span>Equipment, Bundle, Keyboard</p>
            <p className='product-display-category'><span>Tags : </span>Bundle, Mechanical</p>
        </div>
    </div>
  )
}

export default ProductDisplay