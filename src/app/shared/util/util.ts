import moment from 'moment';


export function onConvertDate(date: any) {
    return moment(date).format('DD/MM/YYYY hh:mm');
}