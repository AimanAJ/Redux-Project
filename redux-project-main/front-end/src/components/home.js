import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.css";
//import "./script.js";

const Home = () => {
  const allItems = useSelector((state) => state.item.items);

 

  return (
    <div className="row container-fluid m-3 ">
      <div class="item-list">




{allItems.map((item) => {
    return (
      <div class="item">
        <div class="item-img">
          <img
            style={{ border: "1px solid gray", borderRadius: "25px" }}
            src={"http://localhost:8000/uploads/" + item.image}
          />
          <div class="icon-list">
            <button type="button">
              <i class="fas fa-sync-alt"></i>
            </button>
            <button type="button">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button type="button">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="item-detail">
          <a href="#" class="item-name" style={{ fontSize: "2rem" }}>
            {item.name}
          </a>
          <a href="#" class="item-name" style={{ fontSize: "1rem" }}>
            {item.description}
          </a>
          {/* <div class = "item-price">
                            <span class = "new-price">$220.00</span>
                            <span class = "old-price">$275.60</span>
                        </div> */}
          <p>{item.description}</p>
          <button type="button" class="add-btn">
            add to cart
          </button>
        </div>
      </div>
    );
  })}




        </div>
    </div>
  );
};

export default Home;
