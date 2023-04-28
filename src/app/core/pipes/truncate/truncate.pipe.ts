import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {  // most 2 db paraméterből fog állni az args tömb
    const limit = args[0] > 0 ? args[0] : 10;  // args 1. eleme: hány karakter után vágja el a szöveget; az a kérdés, kap-e 1. par.-t a html-ben - ha kap par.-t a html-ben, akkor érvényesüljön az, ellenkező esetben 10 kar.
    const endChar = args[1] ? args[1] : '...';  // args 2. eleme:  az a kérdés, kap-e 2. par.-t a html-ben - mi legyen a végkarakter; kapott-e 2. par.-t a pipe

    return value.substring(0, limit).trim() + ' ' + endChar;
  }

}
