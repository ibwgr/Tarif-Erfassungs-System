export class Helper {
    add(p1, p2){
        let result = parseFloat(p1) + parseFloat(p2);
        return Math.round(result*100)/100;
    }
}