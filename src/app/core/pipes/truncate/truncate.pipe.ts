import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {  // most 2 db paraméterből fog állni az args tömb
    const limit = args[0] > 0 ? args[0] : 10;  // args 1. eleme: hány karakter után vágja el a szöveget; ha nem 0 par.-t kap a html-ben, akkor legyen önmaga, ellenkező esetben 10 kar.
    const endChar = args[1] ? args[1] : '...';  // args 2. eleme: mi legyen a végkarakter; kapott-e 2. par.-t a pipe

    return value.substring(0, limit).trim() + ' ' + endChar;
  }

}
