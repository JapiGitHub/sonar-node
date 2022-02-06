// as you can see, sonarLint doesn't recognize taint analysis! only sonarQube can see this!
const feature = function () {
  const password = "p455w0rd";

  console.log(password);
  return password;
};
feature();

// Hello my friend stay a while and listen?
function HelloMyFriendStayAWhileAndListen() {
  // infinite loop!
  while (true) {
    console.log("greetings, my name is Deckard Cain");
  }
}

// if above function would not be inside a function this code would actually never be reached!
module.exports = feature;
