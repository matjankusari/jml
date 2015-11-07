Object.prototype.each = function(f) {
    var obj = this
    Object.keys(obj).forEach( function(key) { 
        f( obj[key], key ) 
    });
}


var jml = require('./jml-func');

var nItems = 170;

var data = [];

var range = function(n) { return Array.apply(null, Array(n)).map(function (_, i) {return i;}); }

range(nItems).forEach( function(i) { data.push({ name: 'mat', surname: 'kusari', id: i }); })

function someJml() {

    var someJml = {};

    data.forEach( function( item ) {

        someJml['div' + jml.xid() ] = {
            'span class="styled"': {
                t: fullName( item )    
            },
            div: {
                t: 'another item'
            }
            
        }
    });

    return someJml;
}

function fullName( item ) {
    return [ item.id,': ',item.name,' ',item.surname].join('');
}

var html = jml.parse( someJml() );

function testOrder( html ) {
    range(nItems).forEach( function(s) { html.indexOf(s) > -1 ? '' : console.log('Not passed', s) } );
}

//console.log( html );

testOrder( html );


