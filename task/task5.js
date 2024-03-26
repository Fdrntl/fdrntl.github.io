function datermineSeason(monthNumber){

let a;
switch (monthNumber) {
    case 12: 
    case 1:
    case 2: 
      a = "winter";
    break;

    case 3:
    case 4:
    case 5:
        a = "spring";
    break;

    case 6:
    case 7:
    case 8:
        a = "summer";
    break;

    case 9:
    case 10:
    case 11:
        a = "autumn";
    break;
    default:
        a = "unknown month number";   
} 

return a;

}
