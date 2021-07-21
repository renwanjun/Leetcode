const nums=[11,2,7,15],target=9
let results=[]
for(let i=0,length=nums.length;i<length;i++){
    if(nums[i]>=9)continue;
    let left=target-nums[i]
    let endIndex=nums.slice(i+1,nums.length).indexOf(left)
    if(endIndex<0)continue
    results=[i,endIndex+i+1]
    break
}
console.log(results)