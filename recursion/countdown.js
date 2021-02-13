function countDown(n) {
  if (n <= 0) {
    console.log("All Done");
  } else {
    console.log(n);
    n--;
    countDown(n);
  }
}

countDown(3);
