import { addToCart, emptyCart, removeCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div className="buttons">
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>

      <div className="product-container">
        {data.map((item) => <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <div>Brand: {item.brand}</div>
            <div>Category: {item.category}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to cart
            </button>
            <button onClick={() => dispatch(removeCart(item.id))}>
              Remove from cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
