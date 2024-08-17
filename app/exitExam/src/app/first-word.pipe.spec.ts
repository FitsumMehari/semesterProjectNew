import { FirstLetterPipe } from './first-word.pipe';

describe('FirstWordPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
