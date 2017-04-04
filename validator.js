/**
 * Well this is what i've learned - not that async ruins everything, but that
 * async needs to be accounted for.  At this point I'm going to chase the rabbit
 * rather than use async series, but that is always an option for later. This
 * is going to be an adventure.
 * This is the main program for validating xAPI statements from the command
 * line.  It takes a filename as a command line argument as the statement or
 * array of statements to be verified.  It then uses AJV.js as it's schema
 * validator and uses additional logic as needed to validate statements against
 * the xAPI specification.
 * Schemas are found in `schemas` folder.
 * Example statements are found in `statements` folder.
 * Additional code is found in `lib` folder.
 */

(   // begin closure
function validator(module, pff, getAll, parseFiles) {

    const args = process.argv;

    console.log('Start validator.js');

    // Make sure we have the filename
    let filenames = [];
    // console.log(args);
    if (args.length < 3) {
        pff((err, data) => {
            if (err) throw err;
            console.log('Thank you please come again.');
            filenames = data;
        });
    } else if (args[2] === '-a') {
        getAll((err, data) => {
            if (err) throw err;
            console.log('Hello again.');
            filenames = data;
        });
    } else {
        filenames.push(args[2]);
        parseFiles(filenames, (err, data) => {
            if (err) throw err;
            console.log('Welcome back.');
            filenames = data;
        })
    }
    console.log('reminder async, this will not have a value until much later', filenames);
    console.log('Go on to that great beyond where everything will be taken care of');

}(module, require('./lib/promptForFile.js'), require('./lib/allStmts.js'), require('./lib/parseFiles.js'))
);  // end closure
