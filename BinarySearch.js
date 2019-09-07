let array = [1,2,3,4,5,6,7];

console.log(binarySearch(array,5));

console.log(binarySearch(array,3));

console.log(binarySearch(array,19));

function binarySearch(array,target){

    if(array.length == 0)return -1;

    let left = 0,right=array.length-1;

    while(left <= right){

        let mid = left + (right - left)/2;

        if(array[mid] == target)return mid;
        
        if(array[mid] > target)right = mid-1;
        else left = mid+1;
    }
    return -1;

}