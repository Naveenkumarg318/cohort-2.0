const users= [{
    firstName : "Naveen",
    gender : "male"
},
{
    firstName : "Ganesh",
    gender : "male"
},
{
    firstName : 'Mikasa',
    gender : "female"
}]

for(let i=0;i<users.length;i++)
{
    if(users[i]["gender"]=="male")
    {
        console.log(users[i]["firstName"]);
    }
}