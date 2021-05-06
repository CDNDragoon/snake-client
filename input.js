let connection;

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("exited");
    process.exit()
  } else if (data === "w") {
    connection.write("Move: up"); 
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right")
  } else if (data === "m") {
    connection.write("Say: Go long")
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data)})
  return stdin;
};

module.exports = {setupInput};