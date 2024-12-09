function area(shape, measure1, measure2){
    if(shape === "rectangle"){
        return measure1 * measure2;
    } else if(shape === "triangle"){
        return 0.5 * measure1 * measure2;
    } else if(shape === "circle"){
        return Math.PI * measure1 * measure2;
    } else{
        return "shape not recognized";
    }
}

console.log(area("rectangle", 10, 5));
console.log(area("triangle", 5, 7));
console.log(area("circle", 10, 2));