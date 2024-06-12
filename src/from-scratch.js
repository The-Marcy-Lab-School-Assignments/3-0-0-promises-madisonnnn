const resolvedWrapper = (val) => {
  const promise = new Promise((resolve,rejected) => {
    // setTimeout(() => {
      resolve(val)
    // }, 500);
  })
  return promise 
};

const rejectedWrapper = (val) => {
  const promise = new Promise((resolve,rejected) => {
    //setTimeout(() => {
      rejected(new Error(val))
    //}, 500);
  })
  return promise 
};

const handleResolvedPromise = (promise) => {
  return promise.then((randomValue) => {
    console.log(`${randomValue}`)
    return randomValue
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then((randomValue) => {
    console.log(`${randomValue}`)
    return randomValue
  }).catch((err) => {
    console.error(`Your error message was: ${err.message}`)
    return null
  })
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
