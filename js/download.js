function downloadUrl(url, callback) { 
      var request = window.ActiveXObject ? 
          new ActiveXObject('Microsoft.XMLHTTP') : 
          new XMLHttpRequest; 
 
      request.onreadystatechange = function() { 
        if (request.readyState == 4) { 
          request.onreadystatechange = doNothing; 
          callback(request.responseText, request.status); 
        } 
      }; 
 
      request.open('GET', url, true); 
      request.send(null); 
    } 
 
    function parseXml(str) { 
      if (window.ActiveXObject) { 
        var doc = new ActiveXObject('Microsoft.XMLDOM'); 
        doc.loadXML(str); 
        return doc; 
      } else if (window.DOMParser) { 
        return (new DOMParser).parseFromString(str, 'text/xml'); 
      } 
    } 
 
    function doNothing() {}
