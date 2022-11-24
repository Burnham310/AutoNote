jQuery(function() {
  $("#addButton").on('click', function() {
      addMarkDownArea();
  });
});



var MARKDOWN_AREAS = {};



function genNonDuplicateID(){
  return Math.random().toString();
}


function addMarkDownArea() {

  // const  = genNonDuplicateID();
  // var new_textbox = $(`<div class="row"><textarea class="textbox"></textarea></div>`);
  var new_textbox = document.createElement("textarea");
  $("#container").append(new_textbox);
  console.log($(".row:last-child").first()[0]);
  var simplemde = new SimpleMDE({
    element: new_textbox
  });

}