import * as fromUtil from './util.actions';

describe('loadUtils', () => {
  it('should return an action', () => {
    expect(fromUtil.loadUtils().type).toBe('[Util] Load Utils');
  });
});
