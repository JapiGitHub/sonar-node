// as you can see, sonarLint doesn't recognize taint analysis! only sonarQube can see this!
const feature = function () {
  const password = "p455w0rd";

  console.log(password);
  return password;
};
feature();

// infinite loop!
var j = 0;
while (true) {
  j++;
}

//because of infinite loop this code is actually never reached!
module.exports = feature;
