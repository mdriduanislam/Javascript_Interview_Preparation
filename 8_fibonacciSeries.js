function fibonacciSeries(n){
    let num1=0;
    let num2=1;
    let sum= num1+num2;
    console.log(num1);
    console.log(num2);
    for(let i=1;i<n-1;i++){
        console.log(sum);
        sum= sum+i-(sum-(2*i));
    }
    return sum;
}
fibonacciSeries(10);

