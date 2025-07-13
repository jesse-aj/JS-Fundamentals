const args = process.argv.slice(2);
const count = args.lenght;

if (count === 0){
    console.log ("No argument");

}else if (count == 1){
    console.log("Argument found");
}else {
    console.log("Arguments found");
}
