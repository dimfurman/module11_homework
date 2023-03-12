function format_date(str_date) {
    let in_date = new Date(str_date);
    return ((in_date.getDate()>9?in_date.getDate():("0"+in_date.getDate())) + "." +
            ((in_date.getMonth()+1)>9?(in_date.getMonth()+1):("0"+(in_date.getMonth()+1))) + "." + 
            in_date.getFullYear());
}

module.exports = format_date