// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, "This is the data");
    callback("This is my callback error", undefined);
  }, 2000);
};
getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//Promise
const getDataPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the promise data: ${data}`);
      //   reject("This is my promise error");
    }, 3000);
  });

const myPromise = getDataPromise(123);

myPromise.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
