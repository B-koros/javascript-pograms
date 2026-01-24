//asynchronous => Allows multiplr  operation to be performed concurrrently  without blocking the execution  flow and the program  tocontinue
//synchronous  => Allows execution of code consecutively lin by line sequentially or it waits operations to complete  before comerncing
function func1(callback) {
  setTimeout(() => {
    console.log("Task1");
    callback();
  }, 3000);
}
function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}
func1(func2);
