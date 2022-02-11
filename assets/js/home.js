
// /////////////////////////////////////////////////////////////////////////////////////////

// strike-through on checkedd checkbox
$('.todo-checkbox').change(function() {

    if (this.checked) {
      $(this).parent().css({
        "text-decoration": "line-through",
        "opacity": "0.5"
      });
    } else {
      $(this).parent().css({
        "text-decoration": "none",
        "opacity": "1"
      });
    }
  });

//   ///////////////////////////////////////////////////////////////////////////////////////////////
