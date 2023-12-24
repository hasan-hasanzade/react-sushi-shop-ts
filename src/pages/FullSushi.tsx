import React from 'react';
import { useParams } from 'react-router-dom';
import '../scss/components/_full.scss';
import { useAppDispatch } from '../redux/store';
import { addItem, decreaseItem } from '../redux/cart/slice';
import { fetchSingleSushi } from '../redux/sushi/asyncActions';
import { singleSushiSelector, cartSelector } from '../redux/cart/selector';
import { useSelector } from 'react-redux';
import { CartItem } from '../redux/cart/types';

const FullSushi: React.FC = () => {
  const cartState = useSelector(cartSelector);
  const data = useSelector(singleSushiSelector);
  const dispatch = useAppDispatch();

  const { id: sushiId } = useParams();

  React.useEffect(() => {
    if (sushiId) {
      dispatch(fetchSingleSushi(sushiId));
    }
  }, [sushiId]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { imageUrl, title, price, desc, id } = data;

  const onClickDecrease = () => {
    dispatch(decreaseItem(id));
  };

  const onClickIncrease = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
    } as CartItem;
    dispatch(addItem(item));
  };

  const selectedItem = cartState.items.find((item) => item.id === id);

  const count = selectedItem?.count || 0;

  return (
    <div className="container">
      <div className="full-wrapper">
        <img src={imageUrl} alt="" />
        <div className="wrap">
          <div className="center">
            <h2 className="title">{title}</h2>
            <p className="price">{price} $</p>
            <div className="cart__item-count">
              <button
                onClick={onClickDecrease}
                disabled={count === 0}
                className="button button--outline button--circle cart__item-count-minus">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  />
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </button>
              <b className="counter">{count}</b>
              <button
                onClick={onClickIncrease}
                className="button button--outline button--circle cart__item-count-plus">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  />
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div>
            <h3 className="desc">Description:</h3>
            <span className="descspan">{desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSushi;
