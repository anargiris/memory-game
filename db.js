let database = firebase.database();

const add = document.getElementById("add");
const nameInput = document.getElementById("addName");
add.addEventListener("click", writeUserData);

async function writeUserData(e) {
  if (nameInput.value != "" && nameInput.value.length <= 12) {
    userId = Math.floor(Math.random() * 100);
    await firebase
      .database()
      .ref("users/" + userId)
      .set({
        username: nameInput.value,
        score: score,
      });
    window.location.pathname = "boards.html";
  } else {
    console.log(nameInput.length);
    alert("Enter something");
  }
}
