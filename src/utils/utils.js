
export const px = (string) => `${string}px`

export const em = (string) => `${string}em`

export const calcLerp = function(v0,v1, t){
    //this is calculating our lerp value.
    if(t < 0){
        return 1 
    }

    let max = v1 - v0

    if(t >= max){
        return 0
    }

    return (max - t) / max

}

export const lerp = function(v0,v1,t){
    return v0 + t * (v1 - v0); 
}

// export const lerp = function(v0,v1,t){
//     //plug in our calc lerp value here.
// }

//1236 v1

//651 v0

//t = scroll
//max scrol = 585

//as scroll goes from  0 -> 585
// we want a value to be returned between 0 & 1
// 1236 - 651 = 585 = our max