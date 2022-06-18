import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Ticket(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function buy() {
    //tjekker om der er flere tickets tilbage
    if (props.ticketsinBasketNo > props.ticketNo) {
      alert("0 tickets left");
    } else {
      //tjekker om der allerede er et item i basket med samme id
      if (basket.tickets.find((ticket) => ticket.id === props.ticket.id)) {
        //hvis true skal den opdatere basket med en kopi af det fundne id, hvor amount er +1, så man kan købe flere
        setBasket((old) => {
          const mapped = old.tickets.map((ticket) => {
            if (ticket.id === props.ticket.id) {
              const copy = { ...ticket };

              copy.amount++;

              return copy;
            }

            return ticket;
          });
          return { ...old, tickets: mapped };
        });
      } else {
        //hvis false skal den bare tilføje id for første gang i basket
        setBasket((oldState) => ({
          ...oldState,
          tickets: [...oldState.tickets, { ...props.ticket, amount: 1 }],
        }));
      }
    }
  }

  return (
    <div
      onClick={buy}
      className="ticket"
      style={
        props.ticket.id === 1
          ? { border: "5px solid #20E3E3", boxShadow: "0px 0px 10px #5AFFFF" }
          : { border: "5px solid #FB3CFF", boxShadow: "0px 0px 10px #FC61FF" }
      }
    >
      <button className="add">+</button>

      <div className="ticket-text">
        <h3>{props.ticket.type}</h3>

        <p>{props.ticket.price} DKK</p>
      </div>
    </div>
  );
}
