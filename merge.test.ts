import merge from './merge';

describe('merge', () => {
  it('should merge two sorted collections', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('should merge collections with different lengths', () => {
    const collection1 = [1, 3, 5, 7, 9];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 9];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('should merge empty collections', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expected: number[] = [];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });
});
