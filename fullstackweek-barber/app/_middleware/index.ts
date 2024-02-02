import {format} from 'date-fns'
import {ptBR} from 'date-fns/locale'


export class DateUtils{
    static format(date: Date, _format:string): string{
        const str = format(date, _format, {locale: ptBR})
        return StringUtils.capitalizeFirstLetter(str)
    }
}


export class StringUtils {
    static capitalizeFirstLetter(input: string): string {
        if (input.length === 0) {
          return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
      }
}