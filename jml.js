/* Private */

function element( tag, html ) {

    return tag === "t" ? html : 
           [ '<', rmxid(tag), '>', html, '</', tag.split(" ")[0], '>'].join('');
}

function rmxid( tag ) { return tag.replace(/ xid="\d+"/g, ""); }

function random() { return Math.floor((Math.random() * 100) + 1); }

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

/* Public */

function parse( jml ) {
    
    var html = [];
    
    function _parse() {

        Object.keys( jml ).forEach( function( node ) {

            if ( typeof jml[node] === "string") 
            {   
                html.push( element( node, jml[node]) );
            }
            else 
            {
                html.push( element( node, parse( jml[node] )));        
            }
        });

        return html.join("");
    }

    return trampoline( _parse.bind(null,jml));
}

function id( id ) { return [' ', id || 'id' , '="' , random(), random(), '"'].join(''); }

function xid() { return id('xid'); }

/* Export */

module.exports = {
    parse: parse,
    id: id,
    xid: xid
};

