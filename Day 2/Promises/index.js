var res;
var url2;
var userId = 1;

let prom1 = function (res) {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res = data;
      for (var key in res) {
        $(".usersContainer").append(
          "<div class='user'>" + res[key].name + "</div>"
        );
      }
      // $(".user").eq(0).css("background-color", "rgb(240, 148, 240)");

    });
};

let prom2 = function (res) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach(function (e) {
        $(".removeContainer").append(
          "</div><section class='titles'><p>" + e.body + "</p></section>"
        );
      });
    });
};


prom1();
prom2();

var pastClickedId = undefined;
$(".usersContainer").click(function (e) {
  $(pastClickedId).css("background-color", "rgb(240, 148, 240)");

  if ($(e.target).hasClass("user")) {
    userId = $(e.target).index() + 1;
    pastClickedId = e.target;
    $(".removeContainer").empty();
    $(e.target).css("background-color", "rgb(201, 121, 201)");
  }
  prom3();

});

let prom3 = function (res) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (e) {
        $(".removeContainer").append(
          "<section class='titles'><p>" + e.body + "</p></section>"
        );
      });
    });
};

