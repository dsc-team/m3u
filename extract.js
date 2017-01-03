var page = require('webpage').create();
var system = require('system');
var fs = require('fs');

if (system.args.length === 1) {
    console.log('Usage: extract.js <some URL>');
    phantom.exit(1);
}

//fs.write("dump.out", "");
page.onResourceRequested = function (req, net) {
        //console.log('[REQUESTED:]' + req.url)
        //fs.write("dump.out",JSON.stringify(req, undefined, 2), 'a');
        var match = req.url.match(/index.m3u8\?e=/g);
        if (match != null) {
          //console.log(req.url)
          var str = req.url.split('?')
          console.log('queryparams: ' + str[1]);
          slimer.exit();
        }
};

//page.onResourceReceived = function (res) {
//        fs.write("dump.out",JSON.stringify(res, undefined, 2), 'a');
//    };
address = system.args[1];
page.open(address, function (status) {
   //console.log(JSON.stringify(status, undefined, 2))    
   //var content = page.content;
   //page.render('screenshot.png');
   //console.log('Content: ' + content);
   slimer.exit();
});
