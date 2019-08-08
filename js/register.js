window.onload = function() {
  const college_select = document.getElementById("city_opt");
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
    })
    .catch(function(error) {
      console.log(error);
    });
};
