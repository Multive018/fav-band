function makeFunctional(event) {
  event.preventDefault();
  let name = prompt("What is your name?");
  let hearing = prompt("Are you sensitive to loud sounds?👀").toLowerCase();

  if (hearing === "No".toLowerCase()) {
    alert("Hi " + name + "! Enjoy listening to Neon Trees🤘");
  }else {
    if (hearing === "Yes".toLowerCase()) {
      alert(
        "Hi " +
          name +
          "! I recommend lowering the volume to avoid ear problems🙃"
      );
    }
  else{
      alert("Please follow the instructions😟");
    }
  }
}

let validate = document.getElementById("checker");
validate.addEventListener("click", makeFunctional);

makeFunctional();
