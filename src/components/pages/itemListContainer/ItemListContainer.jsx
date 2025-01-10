import "./ItemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader";

const ItemListContainer = () => {
  return (
    <div id="notifications-container" className="notifications-container">
      <NotificationsHeader id="notifications-header" className="notifications-header" logoId="notifications-header-item-logo"/>
      <ProductCard
        titulo="titulo 1"
        precio="precio 1"
        description="descripcion 1"
      />
      <ProductCard
        titulo="titulo 2"
        precio="precio 2"
        description="descripcion 2"
      />
      <ProductCard
        titulo="titulo 3"
        precio="precio 3"
        description="descripcion 3"
      />
      <ProductCard
        titulo="titulo 4"
        precio="precio 4"
        description="descripcion 4"
      />
    </div>
  );
};

export default ItemListContainer;
