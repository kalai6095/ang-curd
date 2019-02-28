import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullfilter'
})
export class NullfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value == null || value == undefined) ? "NA" : value;
  }

}
