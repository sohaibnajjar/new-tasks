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
      other_info = document.createElement("lable");
      other_info.innerText = cards.website;
      const close_button = document.createElement("button");
      close_button.className = "button";
      // more_info.id = element.id;
      close_button.innerText = "close";

      modal_final.appendChild(photo);
      modal_final.appendChild(lable1);
      modal_final.appendChild(lable2);
      modal_final.appendChild(lable3);
      modal_final.appendChild(other_info);
      modal_final.appendChild(close_button);
      // console.log(card);
      all_things.appendChild(modal_final);
      close_button.addEventListener("click", past);
      console.log(all_things);
    }
  });
};
const past = all_things => {
  console.log(all_things.children);
  // all_things.removeChild();
  // all_things.target.parent;
  // all_things.target.remove();
  // modal.remove();
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
