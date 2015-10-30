/* Private */

function element( tag, html ) {

    return tag === "t" ? html : 
           [ '<', rmxid(tag), '>', html, '</', tag.split(" ")[0], '>'].join('');
}

function rmxid( tag ) { return tag.replace(/ xid="\d+"/g, ""); }

function random() { return Math.floor((Math.random() * 100) + 1); }

/* Public */

function parse( jml ) {
 
    var html = [];

    Object.keys( jml ).forEach( function( node ) {

        if ( typeof jml[node] === "string") 
        {   
            html.push( element( node, jml[node]) );
        }
        else if( typeof jml[node] === "object") 
        {
            html.push( element( node, parse( jml[node] )));        
        }  
        else 
        {
            throw new Error("invalid node type: " + node );
        }
    });

    return html.join("");
}

function id( id ) { return [' ', id || 'id' , '="' , random(), random(), '"'].join(''); }

function xid() { return id('xid'); }

/* Export */

module.exports = {
    parse: parse,
    id: id,
    xid: xid
};

