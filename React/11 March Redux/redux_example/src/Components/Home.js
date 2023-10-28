import React from 'react-redux'
import trolley from "../Images/trolley.png"


const Home = () => {
    return(
        <>
            <div className="navbar-section">
                <p>Home</p>
                <img src={trolley}></img>
            </div>
            <div className="cart-wrapper">
                <div className="cart-info">
                    <ul className="list_items">
                        <li> <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D" alt="sneaker-image"/></li>
                        <li>Jordan</li>
                        <li>Air Jordan 1 Mid Shoes</li>
                        <li>Rs.3249 <span><s> Rs.4999</s></span><span className="off"> (35 % off)</span></li>
                        <li>
                            <div className="buy-wishlist">
                            <p>WISHLIST</p>
                            <p>BUYNOW</p>
                            </div>
                        </li>
                       
                    </ul>
                </div>
                <div className="cart-info">
                    <ul className="list_items">
                        <li> <img src="https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D" alt="sneaker-image"/></li>
                        <li>Jordan</li>
                        <li>Air Jordan 1 Retro OG</li>
                        <li>Rs.3249 <span><s> Rs.4999</s></span><span className="off"> (35 % off)</span></li>
                        <li>
                            <div className="buy-wishlist">
                            <p>WISHLIST</p>
                            <p>BUYNOW</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cart-info">
                    <ul className="list_items">
                        <li><img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlciUyMEpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D" alt="sneaker-image"/></li>
                        <li>Jordan</li>
                        <li>Air Jordan 1 SE Mens</li>
                        <li>Rs.3249 <span><s> Rs.4999</s></span><span className="off"> (35 % off)</span></li>
                        <li>
                            <div className="buy-wishlist">
                            <p>WISHLIST</p>
                            <p>BUYNOW</p>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="cart-info">
                    <ul className="list_items">
                        <li><img src="https://images.unsplash.com/photo-1658054976375-a6eaf44a9985?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNuZWFrZXIlMjBKb3JkYW58ZW58MHx8MHx8fDA%3D" alt="sneaker-image"/></li>
                        <li>Jordan</li>
                        <li>Air Jordan 1 SE Older Kids</li>
                        <li>Rs.3249 <span><s> Rs.4999</s></span><span className="off"> (35 % off)</span></li>
                        <li>
                            <div className="buy-wishlist">
                            <p>WISHLIST</p>
                            <p>BUYNOW</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cart-info">
                    <ul className="list_items">
                        <li><img src="https://images.unsplash.com/photo-1651055183233-13e372fbfe51?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkzfHxzbmVha2VyJTIwSm9yZGFufGVufDB8fDB8fHww" alt="sneaker-image"/></li>
                        <li>Jordan</li>
                        <li>Jordan 1 Mid Alt Younger Kids' Shoes</li>
                        <li>Rs.3249 <span><s> Rs.4999</s></span><span className="off"> (35 % off)</span></li>
                        <li>
                            <div className="buy-wishlist">
                            <p>WISHLIST</p>
                            <p>BUYNOW</p>
                            </div>
                        </li>
                    </ul>
                </div>
             </div>
        </>
       )
    }

export default Home;