import generateId from 'lib/generateId';

describe('generateId', () => {
  it('should generate ids', () => {
    const ids = [
      'asdfasdf',
      'aaa adfad f',
      'Hi',
      'aaa adfad f'
    ].map(generateId);

    expect(ids).toMatchSnapshot();
    expect(ids[1]).toEqual(ids[3]);
  });
});
