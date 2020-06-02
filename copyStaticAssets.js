var shell = require('shelljs');

shell.cp('-R', 'src/www', 'dist/www');
shell.cp('-R', '.env.prod', 'dist/.env');
shell.cp('-R', 'ormconfig.json', 'dist/');
shell.cp('-R', 'package.json', 'dist/');
// shell.cp('-R', 'node_modules', 'dist/node_modules');
