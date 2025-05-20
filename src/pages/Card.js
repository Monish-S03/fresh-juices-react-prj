import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaLeaf, FaGlassWhiskey, FaTruck, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import p1 from "./images1/p1.jpg";
import p2 from "./images1/p2.jpg";
import p3 from "./images1/p3.jpg";
import p4 from "./images1/p4.jpg";
import p5 from "./images1/p5.jpg";
import p6 from "./images1/p6.jpg";
import p7 from "./images1/p7.avif";
import p8 from "./images1/p8.jpg";
import p9 from "./images1/p9.jpg";
import p10 from "./images1/p10.jpg";
import p11 from "./images1/p11.jpg";
import p12 from "./images1/p12.jpg";

const Products = () => {
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);

    const products = [
        { id: 1, img: p1, title: "ABC Juice", text: "Healthy and nutritious.", price: 100 },
        { id: 2, img: p2, title: "Mango Juice", text: "Sweet and refreshing.", price: 50 },
        { id: 3, img: p3, title: "Orange Juice", text: "Packed with vitamin C.", price: 40 },
        { id: 4, img: p4, title: "Apple Juice", text: "Fresh and crisp taste.", price: 60 },
        { id: 5, img: p5, title: "Carrot Juice", text: "Great for vision health.", price: 40 },
        { id: 6, img: p6, title: "Cucumber Juice", text: "Hydrating and cool.", price: 40 },
        { id: 7, img: p7, title: "Pineapple Juice", text: "Tropical and delicious.", price: 45 },
        { id: 8, img: p8, title: "Pomegranate Juice", text: "Rich in antioxidants.", price: 60 },
        { id: 9, img: p9, title: "Guava Juice", text: "Boosts immunity.", price: 40 },
        { id: 10, img: p10, title: "Amala Juice", text: "Traditional and nourishing.", price: 40 },
        { id: 11, img: p11, title: "Custardapple Juice", text: "Creamy and delicious.", price: 50 },
        { id: 12, img: p12, title: "Watermelon Juice", text: "Refreshing and hydrating.", price: 35 },
    ];

    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id];
            }
            return updatedCart;
        });
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((acc, curr) => acc + curr, 0);
    };

    const getTotalAmount = () => {
        return Object.entries(cart).reduce((total, [id, quantity]) => {
            const product = products.find((item) => item.id === parseInt(id));
            return total + product.price * quantity;
        }, 0).toFixed(2);
    };

    return (
        <div className="container my-5">
            <nav className="navbar navbar-expand-lg navbar-light mb-4" style={{backgroundColor:'#B4EBE6'}}>
                <div className="container">
                    <a className="navbar-brand" href="#">Fresh Juicer</a>
                    <div className="ms-auto">
                        <button className="btn btn-outline-warning position-relative" onClick={() => setShowCart(!showCart)}>
                            <FaShoppingCart size={24} />
                            {getTotalItems() > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {showCart && (
                <div className="container border p-3 mb-4">
                    <h4>Cart Details</h4>
                    {Object.keys(cart).length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <ul className="list-group">
                                {Object.entries(cart).map(([id, quantity]) => {
                                    const item = products.find((item) => item.id === parseInt(id));
                                    return (
                                        <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <span>{item.title} - ${item.price.toFixed(2)}</span>
                                            <div>
                                                <button className="btn btn-sm btn-danger me-2" onClick={() => removeFromCart(id)}>-</button>
                                                <span>{quantity}</span>
                                                <button className="btn btn-sm btn-success ms-2" onClick={() => addToCart(id)}>+</button>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            <h5 className="mt-3">Total Amount: ${getTotalAmount()}</h5>
                        </>
                    )}
                </div>
            )}

            <section className="container my-5 text-center">
                <h2>Fresh Fruit and Vegetable Juices</h2>
                <p>Get the best quality farm-fresh juices delivered to your doorstep.</p>
            </section>

            <div className="row">
                {products.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card h-100 d-flex flex-column" style={{backgroundColor:'#C1D8C3'}}>
                            <img src={item.img} className="card-img-top" alt={item.title} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text flex-grow-1">{item.text}</p>
                                <h6 className="card-text">Price: ${item.price.toFixed(2)}</h6>
                                <div className="mt-auto">
                                    <button className="btn btn-success" onClick={() => addToCart(item.id)}>
                                        Add to Cart {cart[item.id] && <span className="badge bg-light text-dark ms-2">{cart[item.id]}</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Footer Section */}
        <footer className="text-dark text-center py-4 mt-5" style={{backgroundColor:'#B4EBE6'}}>
        <div className="container">
          <p className="mb-2">&copy; {new Date().getFullYear()} Fresh Juices. All Rights Reserved.</p>
          <div className="social-icons d-flex justify-content-center gap-3">
            <a href="#" className="text-dark"><FaFacebook size={24} /></a>
            <a href="#" className="text-dark"><FaInstagram size={24} /></a>
            <a href="#" className="text-dark"><FaTwitter size={24} /></a>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Products;
