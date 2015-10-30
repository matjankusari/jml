var jml = require('./jml');

var data = [
    {
        id: 1,
        name: 'MArk',
        surname: 'Wayne'
    },
    {
        id: 2,
        name: 'TErese',
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

function someJml() {

    var someJml = {};

    data.forEach( function( item ) {

        someJml['div' + jml.xid() ] = {
            'span class="styled"': {
                t: fullName( item )    
            }
            
        }
    });

    return someJml;
}

function fullName( item ) {
    return [ item.name, , ' ', item.surname].join('');
}

var html = jml.parse( someJml() );

console.log( html );


