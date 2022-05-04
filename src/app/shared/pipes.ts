import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nl2br' })
export class NewlinePipe implements PipeTransform
{
  public transform(inputValue: string): string
  {
    if (!inputValue)
    {
      return inputValue;
    }

    return inputValue.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }
}
