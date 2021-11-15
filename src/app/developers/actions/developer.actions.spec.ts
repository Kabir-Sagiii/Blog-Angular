import * as fromDeveloper from './developer.actions';

describe('loadDevelopers', () => {
  it('should return an action', () => {
    expect(fromDeveloper.loadDevelopers().type).toBe('[Developer] Load Developers');
  });
});
