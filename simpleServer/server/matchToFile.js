var path = require("path");
var fs = require("fs");
var metaDataList = {
  '.css': {contentType: 'text/css', encoding: 'utf8'},
  '.gif': {contentType: 'image/gif', encoding: 'binary'},
  '.html':{contentType: 'text/html', encoding: 'utf8'},
  '.jpg': {contentType: 'image/jpeg', encoding: 'binary'},
  '.js':  {contentType: 'application/javascript', encoding: 'utf8'},
  '.png': {contentType: 'image/png', encoding: 'binary'},
  '.txt': {contentType: 'text/plain', encoding: 'utf8'},
  '.zip': {contentType: 'application/zip', encoding: 'binary'}
}


function matchToFile(pathname, treatFile) {
  if (pathname.charAt(pathname.length - 1) === "/") {
    pathname += "index.html"
  }
  
  var file = path.join(process.cwd(), pathname);
  
  fs.exists(file, function (exists) {
    var metadata;
		
    if (exists) {
      metadata = getMetadata(file);
    } else {
		  metadata = {}
      file = undefined;
    }
    
    treatFile(file, metadata.contentType, metadata.encoding);
  });
}

  
function getMetadata(file) {
  var extension = path.extname(file).toLowerCase();
  
  switch (extension) {
    case '.htm':
      extension = '.html';
      break;
    case '.jpeg':
      extension = '.jpg';
  }
   
  var metadata = metaDataList[extension];
  if (!metadata) {
    metadata = metaDataList['.txt']
  }
  
  return metadata;
}

  
module.exports = matchToFile;