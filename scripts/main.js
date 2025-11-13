const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/liyue1.jpg") {
    myImage.setAttribute("src", "images/liyue2.jpg");
  } else {
    myImage.setAttribute("src", "images/liyue1.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
 const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
myButton.onclick = function () {
  setUserName();
};