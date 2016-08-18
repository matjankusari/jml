
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

//////////////////////////////////////////////////////////////////////////////

var data = [
    {
        id: 1,
        name: 'Mark',
        surname: 'Wayne'
    },
    {
        id: 2,
        name: 'Terese',
        surname: 'Wayne'
    },
    {
        id: 3,
        name: 'Julian',
        surname: 'Wayne'
    },
    {
        id: 4,
        name: 'John',
        surname: 'Wayne'
    }
];

function myHtmlView( data ) {

    return data.map(function( item ) {
        
        var bla = compiler.parse({
            'div class="wrap"': {
                h1: 'My title',
                'span class="styled"': fullName(item)
            }
        });
        console.log(bla);
        return bla;

    }).join('');
}

function fullName( item ) {
    return [ item.id, '--: ', item.name,' ', item.surname ].join('');
}

console.log( myHtmlView(data) );

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