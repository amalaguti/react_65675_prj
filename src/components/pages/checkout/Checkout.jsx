import "./checkout.css"
import { useContext, useState } from "react";
import { CartContext } from "../../../context/Contexts";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { Button, TextInput, Label } from "flowbite-react";

const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    ticketId: "",
    token: "",
    email: "",
  });

  const submit = (evento) => {
    evento.preventDefault();
    // Submit order to firestore
    let total = getTotalAmount();
    let request = {
      requestor: userInfo,
      items: cart,
      total: total,
    };

    // Save request to firestore
    let requestsCollection = collection(db, "requests");
    const newRequest = addDoc(requestsCollection, request);
    newRequest.then((res) => {
      setTicketNumber(res.id);
      removeCart();
    });

    let notificationsCollection = collection(db, "notifications");

    request.items.forEach((elem) => {
      let refDoc = doc(notificationsCollection, elem.id);
      updateDoc(refDoc, { stocked: elem.stocked - elem.quantity });
    });
  };

  const collectFormData = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {ticketNumber ? (
        <div className="requestTicket">Request submitted, ID: {ticketNumber}</div>
      ) : (
        <form className="flex max-w-md flex-col gap-2 p-2 m-2 bg-yellow-200 rounded-lg">
          <Label htmlFor="FormInputTicketId">Ticket ID</Label>
          <TextInput
            id="FormInputTicketId"
            name="ticketId"
            type="text"
            placeholder="IT-SM-202502011948"
            onChange={collectFormData}
            required
          />
          <Label htmlFor="FormInputToken">Token</Label>
          <TextInput
            id="FormInputToken"
            name="token"
            type="text"
            placeholder="token"
            onChange={collectFormData}
            required
          />
          <Label htmlFor="FormInputEmail">Email</Label>
          <TextInput
            id="FormInputEmail"
            name="email"
            type="email"
            placeholder="e@mail"
            onChange={collectFormData}
            required
          />
          <div className="flex justify-end">
            <Button className="m-2 w-20" onClick={submit}>
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
