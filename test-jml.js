
var compiler = require('./jml');

///////////////////////////////////////////////////////////////////////////////

var jml = {
  body: {
    'div class="class"': {
        span: 'Text Node'
    },
    table: {
        tr: {
            td: 'Data'
        }
    }
  }
}

console.log( 
    [ "Test HTML conversion ",  
      compiler.parse( jml ) === '<body><div class="class"><span>Text Node</span></div><table><tr><td>Data</td></tr></table></body>' ? "passed": "did not pass!"
    ].join('')
);

///////////////////////////////////////////////////////////////////////////////

var nItems = 20000;

var data = [];

var range = function(n) { return Array.apply(null, Array(n)).map(function (_, i) {return i;}); }

range(nItems).forEach( function(i) { data.push({ name: 'John', surname: 'Smith', id: i }); })

function myHtmlView( data ) {

    return data.map(function( item ) {
        
        return compiler.parse({
            div: {
                span: fullName(item)
            }
        });

    }).join('');
}

function fullName( item ) {
    return [ item.id,': ',item.name,' ',item.surname].join('');
}


function testOrder( html ) {
    var testOk = true;
    range(nItems).forEach( function(s) { html.indexOf(s) > -1 ? '' : testOk = false; } );
    return testOk;
}

console.log( 
    [ "Test Order ",  
      testOrder( myHtmlView(data)) ? "passed": "did not pass!"
    ].join('')
);