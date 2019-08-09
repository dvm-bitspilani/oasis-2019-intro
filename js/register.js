var textarea = document.getElementById("textarea_type");
var eventlist = document.getElementsByClassName("events_el");
var eventsidarr = [];
var collegeid;
var gender_value;
var yos;

window.onload = function() {
  const college_select = document.getElementById("city_opt");
  const events_select = document.getElementById("events_opt");
  const URL = "https://bits-oasis.org/registrations/get_college/";
  const URL2 = "https://bits-oasis.org/registrations/events_details/";

  fetch(URL)
    .then(resp => resp.json())
    .then(function(response) {
      console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        var opt = document.createElement("option");
        opt.value = response.data[i].id;
        opt.innerHTML = response.data[i].name;
        college_select.add(opt);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  fetch(URL2)
    .then(resp => resp.json())
    .then(function(response) {
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        for (var j = 0; j < response[i].events.length; j++) {
          console.log(response[i].events[j].name);
          var opt = document.createElement("p");
          opt.setAttribute("id", response[i].events[j].id);
          opt.classList.add("events_el");
          opt.innerHTML = response[i].events[j].name;
          opt.onclick = function() {
            console.log(this.textContent);
            console.log(this.id);
            this.style.opacity = "0.1";
            eventsidarr.push(parseInt(this.id));
            console.log(eventsidarr);
          };
          events_select.appendChild(opt);
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

function getcollegeid() {
  const val = document.getElementById("city_opt").value;
  console.log(val);
  collegeid = parseInt(val);
  console.log(collegeid);
}

function getgendervalue() {
  const val = document.getElementById("gender_opt").value;
  gender_value = val;
  console.log(val);
}

function getyosvalue() {
  const val = document.getElementById("yos_opt").value;
  yos_value = val;
  console.log(val);
}

function prereg() {
  const name = document.getElementById("name").value;
  //   const gender = document.getElementsByName("gender");
  //   for (var i = 0; i < gender.length; i++) {
  //     if (gender[i].checked) {
  //       gender_value = gender[i].value;
  //     }
  //   }
  //   console.log(gender_value);
  //   const yos = document.getElementsByName("yos");
  //   for (var i = 0; i < yos.length; i++) {
  //     if (yos[i].checked) {
  //       yos_value = yos[i].value;
  //     }
  //   }
  //   console.log(yos_value);
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  data = {
    email_id: email,
    name: name,
    gender: gender_value,
    city: city,
    year: yos_value,
    phone: phone,
    college_id: collegeid,
    events: eventsidarr
  };
  console.log(data);

  fetch("https://bits-oasis.org/registrations/Register/", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      alert(result.message);
    })
    .catch(function(error) {
      console.log(error);
    });
}
