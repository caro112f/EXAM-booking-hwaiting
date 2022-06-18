import { Link } from "react-router-dom";

import Ticket from "../components/Ticket";

export default function Step1(props) {
  //console.log(props.dataCamping);

  //funktion der updaterer state på freezetickets til at være true
  function freezeTickets() {
    props.setFreezeTickets(true);
  }

  return (
    <section id="tickets" className="steps">
      <div className="heading-wrapper">
        <h2 className="h1margin">
          Step 1 / <span className="fullsteps">5</span>
        </h2>
        <p>Please pick a ticket</p>
      </div>

      <article className="ticket-container">
        <div className="ticket-wrapper">
          {/* her laver vi map() for at kalde en funktion for hvert element i vores ticketData array - vores funktion skaber så en Ticket component for hvert element i arrayet */}
          {props.ticketData.map((t) => (
            <Ticket
              ticketNo={props.ticketNo}
              dataCamping={props.dataCamping}
              key={t.id}
              ticket={t}
              ticketsinBasketNo={props.ticketsinBasketNo}
            />
          ))}
        </div>
      </article>
      <div>
        <Link
          className="next-step"
          style={
            //her laver vi validering i form af at "next" knappen kun skal vises hvis basket indeholder mere en 0 tickets
            props.ticketsinBasketNo > 0
              ? { display: "block" }
              : { display: "none" }
          }
          //her kalder vi funktionen der sætter freezetickets til true, så kan man ikke ændre i tickets på de andre sider
          onClick={freezeTickets}
          to="/booking/campingspots"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
