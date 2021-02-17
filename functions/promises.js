// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
    // callback(undefined, "This is the data");
    // callback("This is my callback error", undefined);
  }, 2000);
};
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

//Promise
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
      // resolve(`This is the promise data: ${data}`);
      //   reject("This is my promise error");
    }, 3000);
  });

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// const myPromise = getDataPromise(123);

// myPromise.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
