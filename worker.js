onmessage = function (message) {
  console.log(message);
  const limit = message.data;
  let i = 0;
  let sum = 0;
  while (i < limit) {
    sum += i;
    i++;
  }
  postMessage(sum);
};
