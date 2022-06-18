import { useContext } from "react";
import { BasketContext } from "../contexts/basket";

export default function Spot(props) {
  //console.log(props.ticketsinBasketNo);

  const { basket, setBasket } = useContext(BasketContext);

  function choose() {
    if (props.spot.available < props.ticketsinBasketNo) {
      alert(
        "Your number of tickets exceeds the number of available spots, please pick another camp"
      );
    } else {
      if (
        basket.campingSpot.find(
          (spot) => spot.productType === props.spot.productType
        )
      ) {
        setBasket((oldState) => ({
          ...oldState,
          campingSpot: [{ ...props.spot, amount: 1 }],
        }));
        // setBasket((old) => !old);
      } else {
        // setBasket((oldState) => ({...oldState, { ...props.spot, amount: 1 })});
        setBasket((oldState) => ({
          ...oldState,
          campingSpot: [{ ...props.spot, amount: 1 }],
        }));
      }
    }
  }
  return (
    <div
      className="campingspot"
      onClick={choose}
      style={
        props.spot.available >= props.ticketsinBasketNo
          ? { border: "5px solid #32ff00", boxShadow: "0px 0px 10px #88ff6b" }
          : { border: "5px solid #ff0057", boxShadow: "0px 0px 10px #ff6497" }
      }
    >
      <h3>{props.spot.area}</h3>
      <p>Available: {props.spot.available}</p>
    </div>
  );
}
