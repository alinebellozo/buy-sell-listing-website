// Client facing scripts here



//On change select value to navigate to specific page//
const $mugFilterSelect = $("#mugFilter")
  if ($mugFilterSelect) {
    $mugFilterSelect.on("change", function(event) {
      location.href = event.target.value
    });
  };




