/** FEEDBACK: In the future, ensure to clean up your code by removing commented out code but great job getting all test cases to pass! */
const resolvedWrapper = (val) => {
  const promise = new Promise((resolve,rejected) => {
      resolve(val)
  })
  return promise 
};

const rejectedWrapper = (val) => {
  const promise = new Promise((resolve,rejected) => {
      rejected(new Error(val))
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
