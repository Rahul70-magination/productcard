import { Modal, Button } from "antd";
import { useState } from "react";
import "../css/ProductCardPopUp.css";
import { HeartFilled } from "@ant-design/icons";
// import React, { useState } from "react";
import image1 from "../images/image1.jpg";
import LoadingComponent from "./LoadingComponent";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const ProductCardPopUp = (props) => {
  return props.loading ? (
    <LoadingComponent visible={props.visible} />
  ) : (
    <Modal
      visible={props.visible}
      onCancel={() => props.setvisible(false)}
      footer={null}
    >
      <div className="main_container">
        <div className="container1">
          <img className="productpopupimg" alt="productimg" src={image1} />
        </div>
        <div className="container2">
          <div className="modelofwatch">lehenga</div>

          <div className="description">Navy Chiffon sequins lehenga</div>

          <div className="price">{props.price}</div>

          <div className="productcode">
            Ensemble Code :319884 | Ships in 21 days
          </div>

          <div className="addbagcontent">
            <div className="selector">
              <Select
                defaultValue="Select Size"
                style={{ width: 120 }}
                onChange={handleChange}
                className="selectorselect"
              >
                <Option value="xl">Xl</Option>
                <Option value="xxl">XXL</Option>
                <Option value="s">S</Option>
                <Option value="m">M</Option>
              </Select>
            </div>

            <div className="addtobag">
              <span className="btnadd" >Add to Bag</span>
            </div>

            <div className="heart">
              <HeartFilled />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductCardPopUp;
