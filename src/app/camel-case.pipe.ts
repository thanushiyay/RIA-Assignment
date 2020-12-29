import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value:string): string {
  
    
      value= value.toString().split(/(?=[A-Z])/).join(' ');
      value = value[0].toUpperCase() + value.slice(1);
      return value;
      }
}
