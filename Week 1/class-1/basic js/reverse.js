const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
for(let i=0;i<n/2;i++)
{
    let temp=arr[i];
    arr[i]=arr[n-i-1];
    arr[n-i-1]=temp;
}


// console.log(arr.reverse());

for(let i=0;i<n;i++)
{
    console.log(arr[i]);
}