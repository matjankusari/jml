var jml = require('./jml-func');

var someJml = {

    body: {
        'div class="mat" xid="123"': {
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
        blink: moreJml()
    }
}


function moreJml() {
    return {
        div: {
            span: {
                t: "sdffsdf"
            }
        }
    }
}

var html = jml.parse( someJml );

console.log( html );


