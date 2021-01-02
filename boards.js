let database = firebase.database();
let scores = document.getElementById("scored");
let scoresArray = [];
window.onload = () => {
  let ref = database.ref("users");
  ref.on("value", gotData, errData);
  function gotData(data) {
    let dataL = data.val();
    let keys = Object.keys(dataL);
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      let name = dataL[k].username;
      let score = dataL[k].score;
      let li = document.createElement("li");
      li.score = score;
      scoresArray.push(li);

      scoresArray.sort((a, b) => a.score - b.score);

      li.innerHTML = name + "   " + ` <span>${score}</span>`;
    }
    for (let i = 0; i < scoresArray.length; i++) {
      scoresArray[i].innerHTML =
        `<h3>${i + 1}</h3>` + "." + scoresArray[i].innerHTML;
      scores.appendChild(scoresArray[i]);
    }
    if (scoresArray.length > 30) {
      scoresArray.pop();
      ref.delete();
    }
  }
  function errData(data) {
    console.log("error");
  }
};
