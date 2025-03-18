import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from '../arrayUtils.js'

test('проверка на удаление дубликатов', () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
});
test('проверка на порядок чисел', () => {
    expect(sortNumbers([5, 2, 4, 1, 3])).toEqual([1, 2, 3, 4, 5]);
});
test('проверка сумму положительный чисел', () => {
    expect(sumPositiveNumbers([1, -3, 2, 5, -8])).toEqual(8);
});
test('проверка на чётность', () => {
    expect(groupByParity([5, 2, 4, 1, 3])).toEqual({ even: [2, 4], odd: [5, 1, 3] });
});
test('проверка на совпадение чисел', () => {
    expect(findCommonElements([17, 25, 42, 0, 3], [8, 43, 5, 25, 0])).toEqual([25, 0]);
});