// -----------------------------------------------------------------------------------------------------------
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $searchBtn1 = document.querySelector("#search1");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");

$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchBtn1.addEventListener("click", handleSearchButtonClick1);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);

var filteredUFO= dataSet; 

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    var ufo = filteredUFO[i];
    var observations = Object.keys(ufo);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[observation];
    }
  }
}

function handleSearchButtonClick() {
  
  var filterDate = $dateInput.value.trim();  
  filteredUFO = dataSet.filter(function(ufo) {
    var ufoDate = ufo.datetime.toLowerCase();

    // If true, add date to the filteredUFO
    return ufoDate === filterDate;
  });

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
  });

  renderTable();

}

function handleSearchButtonClick1() {
 
  var filterCity = $cityInput.value.trim().toLowerCase();

  filteredUFO = dataSet.filter(function(ufo) {
    var ufoCity = ufo.city.toLowerCase();
    return ufoCity === filterCity;
  });

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
  });

  
  renderTable();
}

function handleSearchButtonClick2() {
 
  var filterState = $stateInput.value.trim().toLowerCase();
  filteredUFO = dataSet.filter(function(ufo) {
    var ufoState = ufo.state.toLowerCase();

    return ufoState === filterState;
  });

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
  });

  renderTable();
}

function handleSearchButtonClick3() {
 
 
  var filterCountry = $countryInput.value.trim().toLowerCase();

  filteredUFO = dataSet.filter(function(ufo) {
    var ufoCountry = ufo.country.toLowerCase();

    return ufoCountry === filterCountry;
  });

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
  });

  renderTable();
}

function handleSearchButtonClick4() {
 
 
  var filterShape = $shapeInput.value.trim().toLowerCase();
  
  filteredUFO = dataSet.filter(function(ufo) {
    var ufoShape = ufo.shape.toLowerCase();

    
    return ufoShape === filterShape;
  });

  $(document).ready(function () {
    var firstRecord = 0;
    var rowSize = 50;
    var tableRows=$("#pagetable tbody tr");
    $("a.pagination").click(function(e){
      e.preventDefault();
      if ($(this).attr("id") == "next"){
            if (firstRecord + rowSize <= tableRows.length){ 
                firstRecord += rowSize;}
            } else {
            if (firstRecord!= 0)
             { firstRecord  -= rowSize;}
            }
         paginate(firstRecord, rowSize);
       });
      
     var paginate =function(startAt, rowSize){
       var endAt=startAt + rowSize - 1;
         $(tableRows).each(function(index){
           if (index >= startAt && index <= endAt){
             $(this).show();
           } else{
             $(this).hide();
           }
         });
     }
     paginate(firstRecord, rowSize);
  });

  renderTable();
}

// Render table
renderTable();
