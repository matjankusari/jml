function element( tag, html ) {

    return [ '<', tag, '>', html, '</', tag.split(" ")[0], '>'].join('');
}

function parse( jml ) {
 
    var html = [];
    var call = {
        string: function( node ) { html.push( element( node, jml[node]) ); },
        object: function( node ) { html.push( element( node, parse( jml[node] ))); }
    };

    Object.keys( jml ).forEach( function( node ) { call[ typeof jml[node] ]( node ); });

    return html.join('');
}

module.exports = {
    parse: parse
};