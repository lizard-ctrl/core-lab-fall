var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyadhhZ8Bspu44CM'}).base('apprVULyJMtbkj11z');


base('Memories').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('Description'));
        console.log(record.get('theme'));
        console.log(record.get('location'));
        var memory = record.get('Description');
        var memdiv = document.querySelector("div");
        memdiv.insertAdjacentHTML("beforeend", memory);
        var theme = record.get('theme');
        var themediv = document.querySelector("div1");
        themediv.insertAdjacentHTML("beforeend", theme);
        var location = record.get('location');
        var locationdiv = document.querySelector("div2");
        locationdiv.insertAdjacentHTML("beforeend", location);




        console.log('Retrieved', record.id);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


