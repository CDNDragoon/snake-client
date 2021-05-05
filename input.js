const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("exited");
    process.exit()
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data)})
  return stdin;
};

module.exports = {setupInput};