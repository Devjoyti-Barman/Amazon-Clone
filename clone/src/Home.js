import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return(
        <div className="home">
            <img 
               src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Phase1_Hero/PEADesktopHero_SL_1500x600_rec._CB403166402_.jpg"               
               alt="#"
               className="home__image"
            />
            <div className="home__row">
                <Product 
                  id="1"
                  key="1"
                  title="Samsung Galaxy Note 10 (Aura Red, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                  price={999.99}
                  rating={4}
                  image="https://images-eu.ssl-images-amazon.com/images/I/81frwlzRG5L._AC_UL270_SR136,270_.jpg"
                />
                <Product 
                  id="2"
                  key="2"
                  title="The learn and know how to New Apple iPad Pro (11-inch, Wi-Fi, 512GB) - Space Grey (2nd Generation)  done"
                  price={759.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                  id="3"
                  key="3"
                  title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band "
                  price={359.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/6113mS+xhyL._AC_UL320_.jpg"
                />
                <Product 
                  id="4"
                  key="4"
                  title="MSI GL65 Leopard 10SEK-071IN Intel Core i7-10750H 10th Gen 15.6-inch Laptop(16GB/256GB NVMe SSD + 1TB HDD/Windows 10 Home/Nvidia GeForce RTX 2060/Grey/2.3Kg ) 9S7-16U722-071"
                  price={969.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81cBdLyWiGL._SX425_.jpg"
                />
                <Product 
                  id="5"
                  key="5"
                  title="Lenovo 82C7A006IH V15 ADA Laptop (AMD Athlon Silver 3050U/4GB Ram/ 1TB HDD/ 15.6 inch HD AG/ Windows-10/Integrated AMD Radeon Graphics/ Iron Grey) "
                  price={489.99}
                  rating={2}
                  image="https://m.media-amazon.com/images/I/51RSK3t7tsL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                  id="3"
                  key="3"
                  title="K' FOOTLANCE Men's Running Sports Shoes for Man "
                  price={30}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/81ETiYhIO-L._AC_UL320_.jpg"
                />
                <Product 
                  id="4"
                  key="4"
                  title="adidas Men's Ownthegame Leather Basketball Shoes "
                  price={159.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/81DQFAsHVpL._AC_UL320_.jpg"
                />
                <Product 
                  id="5"
                  key="5"
                  title="adidas Men's Ownthegame Leather Basketball Shoes "
                  price={238.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71T-PIztslL._AC_UL320_.jpg"
                />
                <Product 
                  id="5"
                  key="5"
                  title="Puma Men's 19 Fh Rubber Cricket Shoe"
                  price={199.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61Bn-DcUQ2L._AC_UL320_.jpg"
                />
            </div>
            
            
            {/*Product id,title,price,rating,image*/}
            
        </div>

    );
}

export default Home;