export const config = {
  name: 'BalmJS',
  homepage: 'https://balm.js.org/'
};

export function showDemo() {
  const { name, homepage } = config;
  const message = `Hello ${name} - ${homepage}`;

  console.log(message);
}
