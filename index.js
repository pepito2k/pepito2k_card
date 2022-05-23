import boxen from 'boxen';
import chalk from 'chalk';
import terminalLink from 'terminal-link';
import data from './lib/data.js';

const name = `${chalk.bold(data.name)}
${chalk.red(data.title_highlight)} ${chalk.white(data.title)}
${chalk.gray(data.subtitle)}
------------------------------
${Object.keys(data.urls).forEach((key) => {
  return terminalLink(chalk.yellow(key), data.urls[key]);
})}
`;

const render = (args) => {
  const { json } = args;
  const output = [];

  if (json) {
    return JSON.stringify(data, null, 2);
  }

  const topBox = [];
  const bottomBox = [];

  topBox.push(chalk.bold(data.name));
  topBox.push(`${chalk.red(data.title_highlight)} ${chalk.white(data.title)}`);
  topBox.push(`${chalk.gray(data.subtitle)}`);

  output.push(boxen(topBox.join('\n'), {
    padding: {
      top: 1,
      bottom: 1,
      left: 3,
      right: 20,
    },
    margin: {
      top: 0,
      bottom: 0,
      left: 6,
      right: 0,
    },
    borderColor: 'red',
  }));

  Object.keys(data.urls).forEach((key) => {
    bottomBox.push(terminalLink(chalk.yellow(key), data.urls[key]));
  });

  output.push(boxen(bottomBox.join('\n'), {
    padding: {
      top: 0,
      left: 3,
    },
    margin: {
      top: 0,
      left: 6
    },
    borderStyle: {
      topLeft: ' ',
      topRight: ' ',
      bottomLeft: ' ',
      bottomRight: ' ',
      top: ' ',
      bottom: ' ',
      left: ' ',
      right: ' '
    },
  }));

  return output.join('\n');
};

export default render;
