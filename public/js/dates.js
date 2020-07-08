$(document).ready(() => {
  console.log("entering code");
  // Getting references to our form and inputs
  const name = $("#name");
  const where = $("#where");
  const typeOfDate = $("typeOfDate");

  $(document).on("submit", "dates-form", handleDatesFormSubmit);

  getDates();

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
      nameInput: name.val().trim(),
      whereInput: where.val().trim(),
      typeOfDateInput: typeOfDate.val().trim()
    };
    console.log(userInput);
    if (!userInput.nameInput || !userInput.whereInput) {
      return;
    }
    getDates(userInput.nameInput, userInput.whereInput);
  });

  function getDates(name, where) {
    $.get("/api/Dates/:where", {
      where: where,
      name: name
    })
      .then(() => {
        window.location.replace("/dates-results");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});

$(document).ready(() => {
  // Getting references to our form and inputs
  const name = $("#name");
  const where = $("#where");
  const typeOfDate = $("#typeOfDate");

  // when user clicks add-btn
  $("#add-btn").on("click", event => {
    event.preventDefault();

    // make a newDate obj
    const newDate = {
      // name from name input
      name: $(name)
        .val()
        .trim(),
      // where from where input
      where: $(where)
        .val()
        .trim(),
      // typeOfDate from typeOfDate input
      typeOfDate: $(typeOfDate)
        .val()
        .trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/new", newDate)
      // on success, run this callback
      .then(data => {
        // log the data we found
        console.log(data);
        // tell the user we're adding a Date with an alert window
        alert("Adding Date...");
      });

    // empty each input box by replacing the value with an empty string
    $(name).val("");
    $(where).val("");
    $(typeOfDate).val("");
  });
});
