// Only work when the data sorted.
// time complexity of log(n) 


// const search = (arr, target) => {
    //     for(let i = 0; i < arr.length; i++) {
        //         if(arr[i] === target) return i; 
        //     }
        //     return -1;
        // }
        
        // console.log(search(arr, 58))
        
        // Iterative
        // left side and right side pointer. 
        // while left < right 
        // find middle 
        // check if target found 
        // update pointers 
        const bSearchIter = (arr, target) => {
            let left = 0; 
            let right = arr.length - 1; 
            while(left <= right) {
                let midIdx = Math.floor((left + right) / 2);
                if(arr[midIdx] === target) return midIdx;
                if(arr[midIdx] < target) {
                    left = midIdx + 1; 
                } else {
                    right = midIdx - 1; 
                }
            }
            return -1; 
        }
        
        
        const bSearchRec = (arr, target) => {
            if(!arr.length) return -1; 
            let midIdx = Math.floor(arr.length / 2);
            if(arr[midIdx] === target) return midIdx; 
            if(arr[midIdx] > target) {
                return bSearchRec(arr.slice(0, midIdx), target);
            } else {
                const res = bSearchRec(arr.slice(midIdx + 1), target);
                return res === -1 ? -1 : res + midIdx + 1;
            }
        }
        
        const bSearchRec2 = (arr, target, left = 0, right = arr.length - 1) => {
            if(left > right) return -1; 
            let midIdx = Math.floor((left + right) / 2);
            if(arr[midIdx] === target) return midIdx; 
            if(arr[midIdx] > target) return bSearchRec2(arr, target, left, midIdx - 1);
            return bSearchRec2(arr, target, midIdx + 1, right);
        }
        let arr = [11, 12, 22, 44, 55, 58, 66];
        console.log(bSearchRec2(arr, 10))