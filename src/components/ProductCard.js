import "../css/ProductCard.css";
import image1 from "../images/image1.jpg";
import { HeartFilled } from "@ant-design/icons";
import ProductCardPopUp from "./ProductCardPopUp";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const ProductCard = ({ title, price }) => {
  const [visible, setvisible] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  }, [loading]);
  return (
    <div>
      <div className="productcard_card">
        <div className="productcard_images">
          <img className="productcard_img1" alt="asdsd" src={image1} />
          {/* <ReactLoading style={{
            position:"absolute",
            top:"195px",
            height:"50px",
            width:"50px",
            left:"130px"
        }} type="balls" color="black" height={667} width={375} /> */}
          <button
            className="btn_quickview"
            onClick={() => {
              setvisible(true);
              setloading(true);
            }}
          >
            Quick View
          </button>
          <button className="btn_heart">
            <HeartFilled style={{ fill: "white" }} />
          </button>
        </div>
        <div className="productcard_description">
          <div>{title}</div>
          <div className="productcard_para">Navy Chiffon sequins lehenga</div>
          <div>{price}</div>
        </div>
      </div>
      <ProductCardPopUp
        visible={visible}
        setvisible={setvisible}
        title={title}
        price={price}
        loading={loading}
      />
    </div>
  );
};

export default ProductCard;
