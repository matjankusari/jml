
var jml = require('./jml');

var nItems = 20;

var data = [];

var range = function(n) { return Array.apply(null, Array(n)).map(function (_, i) {return i;}); }

range(nItems).forEach( function(i) { data.push({ name: 'mat', surname: 'kusari', id: i }); })

function myView( data ) {

    return data.map(function( item ) {
        
        return jml.parse({
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
    range(nItems).forEach( function(s) { html.indexOf(s) > -1 ? '' : console.log('Not passed', s) } );
}

testOrder( myView(data) );

console.log( myView(data));



