import { Pipe, PipeTransform } from '@angular/core';

/**
 * A pipe to convert temperature values between Celsius and Fahrenheit.
 *
 * Usage:
 * Use the 'temp' pipe to transform a temperature value from one unit to another.
 *
 * @param {string | number | null} value - The temperature value to be transformed. It can be a string or number.
 * @param {'cel' | 'fah'} inputType - The unit of the input temperature: 'cel' for Celsius, 'fah' for Fahrenheit.
 * @param {'cel' | 'fah'} [outputType] - The desired output unit: 'cel' for Celsius, 'fah' for Fahrenheit. If not provided, the input unit is assumed as the output unit.
 *
 * @returns {string} - The converted temperature followed by the appropriate unit symbol ('°C' or '°F').
 *
 * Example:
 * ```html
 * <p>New York: {{ currentTemperaturs.newYork | temp : 'cel' : 'fah' }}</p>
 * ```
 * This example converts a temperature in Celsius to Fahrenheit and displays it in the template.
 */
@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturPipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): string | number | null {
    if (!value) return value;

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
