import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaLeaf, FaGlassWhiskey, FaTruck, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import c1 from "./images1/c1.jpg";
import c2 from "./images1/c2.jpg";
import c3 from "./images1/c3.jpg";
import bg1 from "./images1/bg1.jpg";
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

const features = [
  { icon: <FaLeaf className="text-success" size={50} />, title: "100% Natural", desc: "Our juices are made from fresh, organic fruits without any preservatives." },
  { icon: <FaGlassWhiskey className="text-warning" size={50} />, title: "Refreshing Taste", desc: "Enjoy a delicious and refreshing taste with every sip." },
  { icon: <FaTruck className="text-primary" size={50} />, title: "Fast Delivery", desc: "We ensure quick and safe delivery right to your doorstep." }
];

const products = [
  { image: p1, name: "ABC Juice", price: "$100.00" },
  { image: p2, name: "Mango Juice", price: "$50.00" },
  { image: p3, name: "Orange Juice", price: "$40.00" },
  { image: p4, name: "Apple Juice", price: "$60.00" },
  { image: p5, name: "Carrot Juice", price: "$40.00" },
  { image: p6, name: "Cucumber Juice", price: "$40.00" },
  { image: p7, name: "Pineapple Juice", price: "$45.00" },
  { image: p8, name: "Pomegranate Juice", price: "$60.00" },
  { image: p9, name: "Guava Juice", price: "$40.00" },
  { image: p10, name: "Amala Juice", price: "$40.00" },
  { image: p11, name: "Custardapple Juice", price: "$50.00" },
  { image: p12, name: "Watermelon Water", price: "$35.00" }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center position-relative" 
        style={{ 
          backgroundImage: `url(${bg1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '80vh' 
        }}
      >
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" 
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="container position-relative z-1 text-center">
          <h1 className="display-3 fw-bold">Pure & Fresh Fruit Juice</h1>
          <p className="lead">Healthy, organic, and refreshing juices delivered to your doorstep.</p>
          <a href="#products" className="btn btn-warning btn-lg mt-3">Shop Now</a>
        </div>
      </section>

      {/* Featured Juices Carousel */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">Our Featured Juices</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            {[c1, c2, c3].map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img 
                  src={image} 
                  className="d-block mx-auto rounded shadow"
                  alt={`Slide ${index + 1}`} 
                  style={{
                    width: "100%", 
                    height: "650px", 
                    objectFit: "cover" 
                  }} 
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row text-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 d-flex flex-column align-items-center">
              <div className="feature-icon mb-3">{feature.icon}</div>
              <h4 className="fw-semibold">{feature.title}</h4>
              <p className="text-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">Our Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm text-center" style={{backgroundColor:'#C1D8C3'}}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text fw-bold text-primary">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default Home;
