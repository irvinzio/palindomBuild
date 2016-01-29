/*
Given a string build a palindrom by only decrementing the letter until you build a palindrom
*/
function build(string){
    console.log("input = "+string);
    count=0;
    equal=false;
    arr=string.split("");
    size=(arr.length)-1;
    for(i=0;i<=size;i++){
        do{
            if(arr[i].charCodeAt(0)>arr[size].charCodeAt(0)){
                arr[i]=String.fromCharCode((arr[i].charCodeAt(0))-1);
                count++;
                equal=true;
            }
            else if(arr[i].charCodeAt(0)<arr[size].charCodeAt(0)){
                arr[size]=String.fromCharCode((arr[size].charCodeAt(0))-1);
                count++;
                equal=true
            }else{
                equal=false;
            }
        }while(equal);
        size--;
    }
    console.log(arr.join().replace(",",""));
    return count;
}
console.log("moves = "+build("abcbmujymuymmfvnsdiunvfinasoihbaoybfaoihbea"));