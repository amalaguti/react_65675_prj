import "./itemDetail.css";
// Replaced by Firebase
// import { getItemById } from "../../../utils/fetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Button } from "flowbite-react";
import { NotificationDetailsList } from "../../common/productCard/notification/NotificationDetailsList";
import { Counter } from "../../common/counter/Counter";
import { notificationImg } from "../../../utils/notificationManagement";

import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";


function ItemDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();


  useEffect(() => {
    // Replaced by Firebase
    // getItemById(id).then((response) => {
    //   console.log("Fetched item", response);
    //   setProduct(response);
    // });
    let productsCollection = collection(db, "notifications");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);

    getProduct
      .then((res) => {
        // setProduct, include id and image ref
        setProduct({ ...res.data(), id: res.id, img: notificationImg(res.data().type) });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <section className="productDetail">
        <div>
          <Button id="btnClose">
            <Link to="/">x</Link>
          </Button>
        </div>
        <Counter item={product} />
        <NotificationDetailsList notification={product} />
        <img
          className="notificationCardImg"
          width={80}
          height={80}
          src={product.img}
          alt="image 1"
        />
      </section>
    </>
  );
}

export default ItemDetail;
