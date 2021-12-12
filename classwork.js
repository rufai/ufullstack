const grade =(num)=> {
    // if (num >= 90){
    //     return "A*"
    // }else if(num < 90 && num >= 80){
    //     return 'A'
    // }else if (num < 80 && num >= 70){
    //     return "B"
    // }else if(num < 70 && num >= 60){
    //     return "C"
    // }else if (num < 60 && num >= 50){
    //     return "D"
    // }else if (num < 50 && num >= 40){
    //     return "E"
    // } else {
    //     return "F"
    // }
    switch (num) {
        case num >= 90:
            console.log("A")
            break;
        case num >= 80:
            return "A"
            break;
        case num >= 70:
            return "B"
            break;
        case num >= 60:
            return "C"
            break;    
        case num >= 50:
            return "D"
            break;
        case num >= 40:
            return "E"
            break;
        case num < 40:
            return "F"
            break;
    }



}

    


   