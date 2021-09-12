import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="header__container">
      <div className="left__box"></div>
      <div>
        <div className="header__items">
          <div className="logo-item">
            <div className="logo-image">
              <img
                width="75"
                className="image-flipkart"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="flipkart"
              />
              <div className="itemms-list">
                Explore{""}
                <span className="items-plus">Plus</span>
                <img
                  width="10"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt="flipkart"
                />
              </div>
            </div>
            <div className="search-box">
              <input
                className="input-box"
                placeholder="Search for products, brands and more"
              ></input>
            </div>
          </div>
          <div className="btn_container">
              <button className="login_btn">Login</button>
          </div>
          <div className="cart_container">
           <Link to="/cart" className="text_link">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
