A library used to transpile json into html. 

Uses a simple string transformation technique to turn a json structure into html.

Works well with generating dynamic html from a combinaition of json and java script.

Example:

```
var jml = {
  body: {
    'div class="class" id="id1234"': {
        span: {
            t: 'Text Node'
        }
    },
    table: {
        tr: {
            td: {
                t: 'Data'
            }
        }
    }
  }
}

var html = jhtml( jml );

```

Html:

```
<body>
    <div class="class" id="id1234">
        <span>Text Node</span>
    </div>
    <table>
        <tr>
            <td>Data</td>
        </tr>
    </table>
</body>
```


Can produce html dynamically based on an array of data:


```

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

```

Html is 

```

<div>
    <span class="styled">MArk Wayne</span>
</div>
<div>
    <span class="styled">TErese Wayne</span>
</div>
<div>
    <span class="styled">Julian Wayne</span>
</div>
<div>
    <span class="styled">John Wayne</span>
</div>


```

How to handle unique id's. 

Use jml.id() or jml.xid() to generate unique id for each element.

jml.xid() will remove the id from the final html output. 

```

    data.forEach( function( item ) {

        someJml['div' + jml.xid() ] = {
            'span class="styled"': {
                t: fullName( item )    
            }
            
        }
    });

```

