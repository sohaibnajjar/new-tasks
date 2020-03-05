const tables = document.querySelector(".tables");

tables.className = "all-things";

const page_load = users => {
  for (let i = 0; i <= 100; i++) {
    form = document.createElement("form");
    tables.className = "all-things";

    photo = document.createElement("div");
    tables.className = "image";

    lable1 = document.createElement("label");

    text_input = document.createElement("input");

    lable2 = document.createElement("label");

    email_input = document.createElement("input");
    text_input.type = "email";

    lable3 = document.createElement("label");

    phone_input = document.createElement("input");
    phone_input.type = "number";
    console.log(i);
    info_button = document.createElement("button");
    tables.className = "all-things";
  }
};
page_load();
