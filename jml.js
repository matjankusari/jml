//var mat = <title>The HTML5 Herald</title>;

var jml = {

    body: {
        'div class=mat uuid123': {
            span: {
                t: "No, np, hello u"
            },
            table: {
                h2: {
                    t: "more text"
                },
                'a href="http://www.google.com"' : {
                    t:'text'
                }
            }
        },
        'div': {
            span: {
                button: {
                    t: "sdfsdfdffsd"
                }
            }
        },
        myeleemnt: {
            anopther: {
                yeanother: {
                    t:"ddfgdfgsdfgf"
                }
            },
            kkkkk: {
                t:"sdfsdf"
            }
        },
        'mat class="mat"': {
            t: "sdfsdf"
        },
        blink: someHtml()
    }
}


function someHtml() {
    return {
        div: {
            span: {
                t: "sdffsdf"
            }
        }
    }
}


function jhtml( jml ) {
 
    var html = [];

    Object.keys( jml ).forEach( function( key ) {

        if ( typeof jml[key] === "string") 
        {   
            html.push( wrap( key, jml[key]) );
        }
        else if( typeof jml[key] === "object") 
        {
            html.push( wrap( key, jhtml( jml[key] )));        
        }  
        else 
        {
            throw new Error("invalid node type: " + key );
        }
    });

    return html.join("");
}

function wrap( tag, html ) 
{
    return tag === "t" ? html : '<'+tag+'>'+html+'</'+tag.split(" ")[0]+'>';
}

var html = jhtml( jml ); 

console.log(html);