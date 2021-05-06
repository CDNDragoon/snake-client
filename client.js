const { IP, PORT } = require("./constants");

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (kickOut) => {
    // code that does something when the connection is first established
    console.log('server says', kickOut);
  });  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: CDN"); 
  });
  conn.on('connect', () => {
    conn.write("Say: Hello")
  });
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });
  return conn;
};
module.exports = {connect};
