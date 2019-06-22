// close nav on click

$(".navList a").on("click", ()=>{
  $("input[type=checkbox]").prop("checked", false);
});