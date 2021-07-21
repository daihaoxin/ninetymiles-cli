import { Command } from 'commander';
import { description, version } from '../package.json';

const program = new Command();
program
  .version(version, '-V,--version')
  .name('ntm')
  // 工具描述
  .description(description)
  // 使用说明
  .usage('command [options]');
// 解析参数，在定义命令之后

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size', 'ddd')
  .option(
    '-p, --pizza-type <type>',
    'flavour of pizza',
    (x, previous) => {
      console.log('xxxxxxxxxxxx');
      console.log(x, previous);
      return x;
    },
    '20',
  );

program.parse(process.argv);

const options = program.opts();
console.log(options);
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size', options.small);
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option('-s, --setup_mode <mode>', 'Which setup mode to use', 'normal')
  .action((env, options) => {
    // env = env || 'all';
    console.log('read config from %s', program.opts().config);
    // console.log('setup for %s env(s) with %s mode', env, options.setup_mode);
  });

program
  .command('exec <script>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use', 'fast')
  .action((script, options) => {
    console.log('read config from %s', program.opts().config);
    console.log('exec "%s" using %s mode and config %s', script, options.exec_mode, program.opts().config);
  })
  .addHelpText(
    'after',
    `
Examples:
  $ deploy exec sequential
  $ deploy exec async`,
  );

program.parse(process.argv);
// 导入拆分的配置
// const createConfig = require('./lib/create');
// createConfig();
