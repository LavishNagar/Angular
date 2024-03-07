import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdline'
})
export class UsdlinePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x;
  }

}
