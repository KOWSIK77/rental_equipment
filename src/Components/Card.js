import React from "react";
import "../bootstrap/dist/css/bootstrap.min.css";
import Cartpad from "./Cartpad";
const Card = () => {
  var products = [
    {
      id:1,
      name: "Iphone14 Pro Max",
      rate: 139999,
      link: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
    },
    {
      id:2,
      name: "Iphone14 Pro ",
      rate: 129999,
      link: "https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg",
    },
    {
      id:3,
      name: "Iphone14 plus",
      rate: 119999,
      link: "https://m.media-amazon.com/images/I/61YSNhAb00L._SL1500_.jpg ",
    },
    {
      id:4,
      name: "Iphone13 Pro Max",
      rate: 129999,
      link: "https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg",
    },
    {
      id:5,
      name: "Iphone13 Pro ",
      rate: 119999,
      link: "https://m.media-amazon.com/images/I/61eDXs9QFNL._SL1500_.jpg",
    },
    {
      id:6,
      name: "Apple Watch Ultra",
      rate: 79999,
      link: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE23ref_VW_PF+watch-49-titanium-ultra_VW_PF_WF_CO+watch-face-49-alpine-ultra_VW_PF_WF_CO?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713639717%2C1660927567672%2C1660927561147",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        {products.map((item)=>{
         return <Cartpad id={item.id} name={item.name} rate={item.rate} link={item.link}/>
        })}
       

      
      </div>
    </div>
  );
};

export default Card;
