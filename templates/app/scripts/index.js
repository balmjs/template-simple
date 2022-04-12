import config from './config';

const { name, homepage } = config;
const message = `Hello ${name} - ${homepage}`;

console.log(message);
