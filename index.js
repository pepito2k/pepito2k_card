import boxen from 'boxen';
import chalk from 'chalk';
import data from './lib/data.js';

const name = `${chalk.bold(data.name)}
${chalk.red(data.title_highlight)} ${chalk.white(data.title)}`;

const render = (args) => {
  const { json } = args;
  const output = [];

  if (json) {
    output.push(JSON.stringify(data, null, 2));
  } else {
    output.push(boxen(name, { padding: 1, margin: 2 }));

    Object.keys(data.urls).forEach((key) => {
      output.push(`${chalk.yellow(key)}: ${chalk.green(data.urls[key])}`);
    });
  }

  return output.join('\n');
};

export default render;
