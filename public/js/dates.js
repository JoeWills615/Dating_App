$(document).ready(() => {
  // Getting references to our form and inputs
  const name = $("#name");
  const where = $("#where");
  const typeOfDate = $("typeOfDate");

  $("select").on("change", function(event) {
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
