import { EventTimePipe } from './event-time.pipe';

describe('EventTimePipe', () => {
  it('create an instance', () => {
    const pipe = new EventTimePipe();
    expect(pipe).toBeTruthy();
  });
});
