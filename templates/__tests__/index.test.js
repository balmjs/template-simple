import { config } from '@/demo';

// Place your tests here.
describe('The name', () => {
  const targetName = 'BalmJS';

  test(`should be ${targetName}`, () => {
    const { name } = config;
    expect(name).toBe(targetName);
  });
});
