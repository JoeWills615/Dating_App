$(document).ready(() => {
  console.log("entering code");
  // Getting references to our form and inputs
  const name = $("#name");
  const where = $("#where");
  const typeOfDate = $("#typeOfDate");

  $(document).on("submit", "dates-form", handleDatesFormSubmit);

  // getDates();

  function handleDatesFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
  }

  $("#create").on("click", function(event) {
    event.preventDefault();
    console.log("==========================");
    console.log("name, where, typeOfDate");
    console.log(
      $(this)
        .val()
        .trim()
    );
    const userInput = {
      name: name.val().trim(),
      location: where.val().trim(),
      typeOfDate: typeOfDate.val().trim()
    };
    console.log(userInput);
    setDate(userInput);
  });

  function setDate(data) {
    console.log(data);

    $.ajax({
      method: "POST",
      url: "/api/dates",
      data: data
    })
      .then(() => {
        console.log("Success");
        // window.location.replace("/dates-results");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});