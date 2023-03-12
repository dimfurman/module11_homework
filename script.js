export function format_date(str_date) {
    let in_date = new Date(str_date);
    return ((in_date.getDate()>9?in_date.getDate():("0"+in_date.getDate())) + "." +
            ((in_date.getMonth()+1)>9?(in_date.getMonth()+1):("0"+(in_date.getMonth()+1))) + "." + 
            in_date.getFullYear());
}


export function input_plus (str) {
    let s = str.replaceAll(' ','').split('+');
    if (s.length == 1) {
        return "Неверное выражение";
    } else {
        let sum = 0;
        s.forEach(el => {
            sum+=parseInt(el);
        });
        return sum;
    }
}
