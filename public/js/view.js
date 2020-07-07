// make a get request to our api to grab all dates
$.get("/api", data => {
  for (let i = 0; i < data.length; i++) {
    const wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "date-well-" + i);
    $("#well-section").append(wellSection);

    // Now add all of our date data to the well we just placed on the page
    $("#date-well-" + i).append("<h2>" + data[i].name + "</h2>");
    $("#date-well-" + i).append("<h3>When: " + data[i].when + "</h4>");
    $("#date-well-" + i).append("<h3>Where: " + data[i].where + "</h4>");
    $("#date-well-" + i).append(`<h3>Type of Date: ${data[i].typeOfDate}</h4>`);
    $("#date-well-").append("<hr>");
  }
});
