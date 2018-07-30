import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false //to see the realtime filter on adding data(but not good, cause performance issue, everytime pipe will recalculated whenever data changes
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    const resultArray = [];
    console.log(value);
    if (value.length === 0 || filterString === '') {
      return value;
    }
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
