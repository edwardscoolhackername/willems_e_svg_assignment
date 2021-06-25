// Identify the elements we want to use //
const smalledward =document.querySelector("#menuedward"),
      smalljasmin = document.querySelector("#menujasmin"),
      smallnic = document.querySelector("#menunic"),
      smallsam = document.querySelector("#menusam"),
      smallthomas = document.querySelector("#menuthomas"),

      edward = document.querySelector("#edwardbox"),
      jasmin = document.querySelector("#jasminbox"),
      nic = document.querySelector("#nicbox"),
      sam = document.querySelector("#sambox"),
      thomas = document.querySelector("#thomasbox");


let eyes = document.querySelectorAll('.eyes'),
    thomasbrow = document.querySelectorAll('.thomaseyebrows'),
    edwardbrow = document.querySelectorAll('.edwardeyebrow'),
    container = document.querySelector("#rightbox");

//Functions next//
jasmin.classList.add('hidden');
nic.classList.add('hidden');
sam.classList.add('hidden');
thomas.classList.add('hidden');

//I cannot figure out how to use arrays. I have to jam this up with different functions for each instead//

// Menu buttons //
function edwardclick() {
  console.log('Here comes Edward!');
  edward.classList.remove('hidden');
  jasmin.classList.add('hidden');
  nic.classList.add('hidden');
  sam.classList.add('hidden');
  thomas.classList.add('hidden');
}
function jasminclick() {
  console.log('Jasmin time');
  edward.classList.add('hidden');
  jasmin.classList.remove('hidden');
  nic.classList.add('hidden');
  sam.classList.add('hidden');
  thomas.classList.add('hidden');
}
function nicclick() {
  console.log('Nic got a click!');
  edward.classList.add('hidden');
  jasmin.classList.add('hidden');
  nic.classList.remove('hidden');
  sam.classList.add('hidden');
  thomas.classList.add('hidden');
}
function samclick() {
  console.log('There we go, Sam!');
  edward.classList.add('hidden');
  jasmin.classList.add('hidden');
  nic.classList.add('hidden');
  sam.classList.remove('hidden');
  thomas.classList.add('hidden');
}
function thomasclick() {
  console.log('Ahh, here comes Thomas.');
  edward.classList.add('hidden');
  jasmin.classList.add('hidden');
  nic.classList.add('hidden');
  sam.classList.add('hidden');
  thomas.classList.remove('hidden');
}

// face Interaction //

function watching() {
  eyes.forEach(function(eyes){
    let x = (eyes.getBoundingClientRect().left);
    let y = (eyes.getBoundingClientRect().top);
    let radian = Math.atan2(event.clientX + x, event.clientY + y);
    let rotation = (radian * (10/Math.PI) * -1) + 0;
    eyes.style.transform = "rotate("+ rotation +"deg)";
  })
};
function angryedward(){
  edwardeyebrow.forEach(function(fury) {fury.classList.add("anger")})
};
function calmedward(){
  edwardeyebrow.forEach(function(calm) {calm.classList.remove("anger")})
};

function sexythomas() {
  thomasbrow.forEach(function(brow) {brow.classList.add("browdance")})
};
function stopthomas() {
  thomasbrow.forEach(function(brow) {brow.classList.remove("browdance")})
};

//Event listeners//
smalledward.addEventListener("click", edwardclick, false);
smalljasmin.addEventListener("click", jasminclick, false);
smallnic.addEventListener("click", nicclick, false);
smallsam.addEventListener("click", samclick, false);
smallthomas.addEventListener("click", thomasclick, false);

container.addEventListener('mousemove', watching, false);
thomas.addEventListener('mouseover', sexythomas, false);
thomas.addEventListener('mouseout', stopthomas, false);

edward.addEventListener('mouseover', angryedward, false);
edward.addEventListener('mouseout', calmedward, false);
