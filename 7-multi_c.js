const num = parseInt(process.argv[2]);
if(isNaN(num)) {
    console.log("Missing number of occurences");  
}

for (let i = 0; i < num; i++) {
    console.log("C is fun");
}
