function solution(arr) {
    let emptyArr = [];
    
    const min = Math.min(...arr);
    
    for (let i = 0; i < arr.length;i++){
    if(arr[i] !== min){
            emptyArr.push(arr[i]);
        
    }
}
    
    return emptyArr.length === 0 ? [-1] : emptyArr;
    }