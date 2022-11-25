


jQuery(function() {
  $("#addButton").on('click', function() {
      addMarkDownArea();
  });
});



var QUESTIONTS_CT = 1;



function genNonDuplicateID(){
  return Math.random().toString();
}


function addMarkDownArea() {

  // const id = genNonDuplicateID();
  
  $("#container").append($(
    `<div class='row question-row'>
      <div class="col-md-1">
        <div class="row">
          <div class="col">
            <button class="btn btn-danger btn-block side-btn">X</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-block side-btn">&uarr;</button>
          </div>
        </div>
      </div>
      <div class="col-md-11">
        <lable for='question${QUESTIONTS_CT}'>Questions ${QUESTIONTS_CT}</lable>
        <textarea class='form-control question' id='question${QUESTIONTS_CT}'></textarea>
      </div>
    </div>`));

  QUESTIONTS_CT += 1;

}