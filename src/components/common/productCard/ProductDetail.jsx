import "./productDetail.css";
import { getItemById } from "../../../utils/fetch";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "flowbite-react";
import { NotificationDetailsList } from "./notification/NotificationDetailsList";

function ProductDetail() {
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
      <Button>
        <Link to="/" className="flex items-center">
        </Link>
      </Button>
      <section className="productDetail">
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

export default ProductDetail;
