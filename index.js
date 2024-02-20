console.log("hello")
let arr=[10,23,30,41];
let newarr=arr.map(fxn);
function fxn(e,i){
    return e+i;
}
console.log(newarr);
let zarr=arr.map(f1);
function f1(e){
    return e>20;
}
console.log(zarr);
let fil=arr.filter((e)=>{
    return e>10;
})
console.log(fil);

let fe=arr.forEach(for1);
function for1(e){
    return e>20;    
}
console.log(fe);


let s=0;
let re=arr.reduce(fxn1);
function fxn1(s,e){
    console.log(s,e);
    return s+e;
    

}
console.log(re);




function updateClock() {
    // Get current time
    const now = new Date();

    // Format hours, minutes, and seconds to ensure they have two digits
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Concatenate hours, minutes, and seconds with ":" separator
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the clock element's content
    document.getElementById('clock').textContent = timeString;
}

// Call updateClock() initially to set the clock when the page loads
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
