function digitalRoot(n) {
  let numer = 16;
  let a = numer.toString();
  let sum = 0;
  let initialSum = 0;

  if (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      // console.log(parseInt(a[i]));
      initialSum += parseInt(a[i]);

      console.log((sum += initialSum));

      // if (initialSum <= 9) {
      //   // console.log(initialSum);
      //   sum += initialSum;
      // }
    }
  }
  // console.log(sum);
}
digitalRoot(16);
