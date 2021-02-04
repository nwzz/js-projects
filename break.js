const num = [1,2,-3,4,-5,-6,7,8,9];
for (let i=0; i<num.length; i++)
{
    const value = num[i];
    if(num[i]<0)
    continue;
    if(num[i]>8)
    break;
    console.log(value);
}