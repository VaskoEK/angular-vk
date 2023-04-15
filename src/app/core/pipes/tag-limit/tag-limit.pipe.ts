import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagLimit'
})
export class TagLimitPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): string[] {
    const limit = args[0] > 0 ? args[0] : 1;
    let array = [];
    for (let i = 0; i < limit; i++) {
      array.push(value[i]);
    }
    return array;

    //VAGY:
    // return value[0];
  }

}
