import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const [num] = args
    return value*num;
  }

}
