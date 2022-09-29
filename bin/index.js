const { program } = require('commander');
const createLocation = require('../lib/create-location');
const readAllLocations = require('../lib/read-locations');
const deleteLocation = require('../lib/delete-location');

program
  .command('create')
  .description('Create a new Location')
  .action(async () => {
    console.log(await createLocation());
  });

program
  .command('read')
  .description('Read all Locations')
  .action(async () => {
    console.table(await readAllLocations());
  });

program
  .command('delete')
  .description('Delete a location by id')
  .option('-I, -id [value]', 'valid Edge location id')
  .action(async (args) => {
    console.log(await deleteLocation(args.Id));
  });

program.parse(process.argv);
