const modal_info = (data, i) => {
  data.map(cards => {
    // console.log(cards.id);
    if (cards.id == i) {
      modal_final = document.createElement("div");
      modal_final.className = "modal";
      photo = document.createElement("div");
      photo.innerText = cards.name.slice(0, 1);
      photo.className = "image";
      lable1 = document.createElement("label");
      lable1.innerText = cards.name;
      lable2 = document.createElement("label");
      lable2.innerText = cards.email;
      lable3 = document.createElement("label");
      lable3.innerText = cards.company.name;
      lable4 = document.createElement("label");
      lable4.innerText = cards.username;
      lable5 = document.createElement("label");
      lable5.innerText = cards.address.street;
      lable6 = document.createElement("label");
      lable6.innerText = cards.address.suite;
      lable7 = document.createElement("label");
      lable7.innerText = cards.address.zipcode;
      lable8 = document.createElement("label");
      lable8.innerText = cards.phone;
      lable9 = document.createElement("label");
      lable9.innerText = cards.company.catchPhrase;
      lable10 = document.createElement("label");
      lable10.innerText = cards.company.bs;
      lable11 = document.createElement("label");
      lable11.innerText = cards.website;

      const close_button = document.createElement("button");
      close_button.className = "button";
      // more_info.id = element.id;
      // console.log(card);
      close_button.innerText = "close";

      modal_final.appendChild(photo);
      modal_final.appendChild(lable1);
      modal_final.appendChild(lable2);
      modal_final.appendChild(lable3);
      modal_final.appendChild(lable4);
      modal_final.appendChild(lable5);
      modal_final.appendChild(lable6);
      modal_final.appendChild(lable7);
      modal_final.appendChild(lable8);
      modal_final.appendChild(lable9);
      modal_final.appendChild(lable10);
      modal_final.appendChild(lable11);
      modal_final.appendChild(close_button);
      all_things.appendChild(modal_final);
      close_button.addEventListener("click", past);
      // console.log(all_things);
      // document.querySelector(".modal").style.display = "static";
    }
  });
};
const past = all_things => {
  // console.log(modal);
  // all_things.removeChild();
  // all_things.target.parent;
  // all_things.target.remove();
  // modal.remove();
  // modal.style.display = "none";
  // console.log((document.querySelector(".modal").style.display = "none"));
  document.querySelector(".modal").remove();
};
const modal = more_info => {
  let i = more_info.target.id;
  // console.log(i);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      if (data) {
        modal_info(data, i);
      }
    });
};

const all_cards = data => {
  data.map(element => {
    card = document.createElement("div");
    card.className = "main_box";
    photo = document.createElement("div");
    photo.innerText = element.name.slice(0, 1);
    photo.className = "image";
    lable1 = document.createElement("label");
    lable1.innerText = element.name;
    lable2 = document.createElement("label");
    lable2.innerText = element.email;
    lable3 = document.createElement("label");
    lable3.innerText = element.company.name;

    const more_info = document.createElement("button");
    more_info.className = "button";
    more_info.id = element.id;
    more_info.innerText = "more info !";
    card.appendChild(photo);
    card.appendChild(lable1);
    card.appendChild(lable2);
    card.appendChild(lable3);
    card.appendChild(more_info);
    // console.log(card);
    all_things.appendChild(card);
    // console.log(all_things);
    more_info.addEventListener("click", modal);
  });
};
const page_load = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      if (data) {
        all_cards(data);
      }
    });
};
page_load();

const all_things = document.querySelector(".all_things");
