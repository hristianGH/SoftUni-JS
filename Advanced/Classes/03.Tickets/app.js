class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
  Mapper(args) {
    let tickets = [];
    args.forEach((ticket) => {
      let splited = ticket.split("|");
      tickets.push(new Ticket(splited[0], splited[1], splited[2]));
    });
    return tickets;
  }  
}

const ticketSort = {
   'destination': (a, b) => a.destination.localeCompare(b.destination),
   'price': (a, b) => a.price - b.price,
   'destination': (a, b) => a.status.localeCompare(b.status),

}

function solve(args, condition) {
  let tickets = new Ticket();
  tickets = tickets.Mapper(args);
  ticket = ticketSort[condition];
  return tickets
}
console.log(
solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
))
