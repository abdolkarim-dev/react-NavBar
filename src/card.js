import './card.css'
export default function Card() {
  return (
    <div className='all'>
  <p>Product Card</p>
  <div  className='card-product'> 
    <img className='img-card' src='logo512.png' />
    <h1 className='title-card'> Samsung A51</h1>
    <span className='price-card'>$300</span>
    <p className='disk-card'>it is the mobile phone in sammsung it is the mobile phone in sammsung </p>
    <button className='btn-card'> Add To Card</button>
  </div>
    </div>

)
}
