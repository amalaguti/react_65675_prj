import { useState } from "react";
import { Button, TextInput, Label } from "flowbite-react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    ticketId: "",
    token: "",
    email: "",
  });
  const submit = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
  };
  const collectFormData = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {/* <form onSubmit={submit}>  Submit is handled by Button element*/}
      <form
        className="flex max-w-md flex-col gap-2 p-2 m-2 bg-yellow-200 rounded-lg"
      >
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
    </div>
  );
};

export default Checkout;
