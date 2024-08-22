import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false, // This forces the pipe to re-render, makes the pipe immutable by default and avoids unnecessary re-rendering.
  // But this is not recommended because the pipe can / will be re-rendered often.
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value]; // copied this array, because the sort method changes the array
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });
    return sorted;
  }
}
