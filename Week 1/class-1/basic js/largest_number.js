const arr = [1, 2, 5, 6, 34, 6, 3, 1];

let large = arr[0];
for(let i=1;i<arr.length;i++)
{
    if(arr[i]>large)
    {
        large = arr[i];
    }
}

console.log(large);