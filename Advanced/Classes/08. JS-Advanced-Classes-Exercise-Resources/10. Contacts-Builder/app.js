const article = document.querySelector('#main').querySelectorAll('article')[0];

class Contact {
  constructor(fName, lName, phone, email) {
    this.fName = fName;
    this.lName = lName;
    this.phone = phone;
    this.email = email;
    this.online = false;
    this.renderId;
  }
  render(id){
    let copy = article.cloneNode(true);
    copy.querySelector('div.title').textContent=`${this.fName} ${this.lName}`
    copy.querySelector('div.info').children[0].textContent=`☎ ${this.phone}`
    copy.querySelector('div.info').children[1].textContent=`✉ ${this.email}`


    document.querySelector('#main').appendChild(copy);
  }
}

function solve() {
let id = 1;
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
      ];
      contacts.forEach(x => {
          x.render(id);
          id++;
      });
      
}
solve();
