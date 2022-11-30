import React from "react";

const Cartpad = ({id,name,rate,link}) => {
  return (
    <div className="col-md-4 p-2 ">
      <div class="card" style={{ width: "17rem" }}>
        <img src={link} class="card-img-top" alt="..." />
        <div class="card-body">
        <h6 class='card-title'>{id}.</h6>
          <h5 class="card-title">{name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rs:{rate}</li>
        
        </ul>
        <div class="card-body">
          <button className="btn btn-danger">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cartpad;
