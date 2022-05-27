const worker = new Worker("worker.js");
function changebg() {
  const color = document.querySelector("body").style.backgroundColor;
  if (color === "red") {
    document.querySelector("body").style.backgroundColor = "green";
  } else {
    document.querySelector("body").style.backgroundColor = "red";
  }
}
function runCPUIntensiveTask() {
  worker.postMessage(5000000000);
  worker.onmessage = function (message) {
    const res = message.data;
    alert(res);
  };
}
