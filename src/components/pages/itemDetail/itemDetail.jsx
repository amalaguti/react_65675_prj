import "./itemDetail.css";
import { getItemById } from "../../../utils/fetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Button } from "flowbite-react";
import { NotificationDetailsList } from "../../common/productCard/notification/NotificationDetailsList";
import { Counter } from "../../common/counter/Counter";


function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItemById(id).then((response) => {
      console.log("Fetched item", response);
      setProduct(response);
    });
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
