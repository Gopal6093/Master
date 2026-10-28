 function reversestring (str:string):string{
    return str.split("").reverse().join("");

 }

 console.log (reversestring ('interview'));


function ispalindrome(str: string): boolean {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;

}
console.log(ispalindrome('madam'));

function fibonacci(n: number): number[] {
    let series: number[] = [0, 1];
    for (let i = 0; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];

    }
    return series;
}
console.log(fibonacci(7));

function fibonacci(n: number): number[] {
    let series: number[] = [0, 1];
    for (let i = 0; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];

    }
    return series;
}
