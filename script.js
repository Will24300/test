function digitalRoot(n) {
  let numer = 16;
  let a = numer.toString();
  let sum = 0;
  let initialSum = 0;

  if (a.length > 1) {
    for (let i = 0; i < a.length; i++) {
      initialSum += parseInt(a[i]);

      console.log((sum += initialSum));

      
    }
  }
}
digitalRoot(16);
