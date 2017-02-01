function summarize() {
  var toonName = ['Tasmanian Devil',
                  'Meg Griffin',
                  'Johnny Bravo',
                  'Turanga Leela',
                  'Mickey Mouse',
                  'Cinderella',
                  'Krusty the Clown',
                  'Sadness',
                  'Pikachu',
                  'Hello Kitty',
                  'SpongeBob',
                  'Elsa',
                  'Rick Sanchez',
                  'Dora the Explorer',
                  'Roger the Alien',
                  'Roger the Alien',
                  'Superman',
                  'Jessica Rabbit'];
  
  var toonImage = ['Images/Tas.jpg',
                   'Images/Meg.jpg',
                   'Images/Jonny.jpg',
                   'Images/Leela.jpg',
                   'Images/Mickey.jpg',
                   'Images/Cinderella.jpg',
                   'Images/krusty.jpg',
                   'Images/Sadness.jpg',
                   'Images/pikachu.jpg',
                   'Images/helloKitty.jpg',
                   'Images/spongebob.jpg',
                   'Images/Elsa.jpg',
                   'Images/Rick.jpg',
                   'Images/Dora.jpg',
                   'Images/Roger.jpg',
                   'Images/RodgerF.jpg',
                   'Images/Superman.jpg',
                   'Images/JessicaRabbit.jpg'];
  
  var position = 0;
  var eventType = document.getElementById("event").value.trim();
  var pricePoint = document.getElementById("price").value.trim();
  var radios = document.getElementsByName("gender");
  

  if (eventType == "Kids Birthday") {
    position += 6;
  }
  
  if (eventType == "Cocktail") {
    position += 12;
  }
  
  if (pricePoint == "Medium") {
    position += 2;
  }
  
  if (pricePoint == "High") {
    position += 4;
  }
  
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked && radios[i].value == "Female") {
      position += 1;
    }
  }
  
  var str = "Customer: " + document.getElementById("firstname").value.trim() + " " + document.getElementById("lastname").value.trim() + "<br />" + "Event/Date: " + document.getElementById("event").value + " / " + document.getElementById("eventdate").value + "<br />" + "Price Range: " + document.getElementById("price").value + "<br />" + "Escort: " + toonName[position] + "<br /><br />" + "<center><img src="+toonImage[position]+" width="+200+" height="+200+"></img></center>" + "<br />";
  
  var checkboxes = document.getElementsByName("gifts[]");
  var selected = [];
  for (var i = 0; i < checkboxes.length; ++i) {
    if(checkboxes[i].checked) {
      selected.push(" " + checkboxes[i].value);
    }
  }
  
  var wrapcolor = document.getElementById("giftwrap").value;
  var wrapcolortext = "<font color="+wrapcolor+">"+wrapcolor+"</font>";
  
  if (selected.length == 0) {
   str += toonName[position] + " will not bring a gift.<br />";
    
    
    
  }else if (selected.length == 1) {
    str += toonName[position] + " will bring the following gift: ";
    str += selected + ". <br />";
    str += "Wrapped in the color: " + wrapcolortext + ". <br />";
    
    
    
  }else {
    str += toonName[position] + " will bring the following gifts: <br />";
    str += "<center>" + selected + ".</center>";
    str += "Wrapped in the color: " + wrapcolortext + ". <br />";
  }
  
  str += toonName[position] + " will wear " + document.getElementById("attire").value + " attire and pick you up via " + document.getElementById("transport").value + ".";
                            
  
  
  document.getElementById("summary").innerHTML = str;
  document.getElementById("summary_wrapper").style.display = "block";
}

function reset_form() {
  document.getElementById("summary").innerHTML = "";
  document.getElementById("summary_wrapper").style.display = "none";
}