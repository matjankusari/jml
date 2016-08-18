A library used to transpile json into html. 

Uses a simple string transformation technique to turn a json structure into html.

Works well with generating dynamic html from a combinaition of json and java script.

Example:

```
var compiler = require('./jml-compiler');

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

var html = compiler.parse( jml );

```

Output:

```
<body>
    <div class="class">
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

var compiler = require('./jml-compiler');

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
        
        return compiler.parse({
            div: {
                'span class="styled"': fullName(item)
            }
        });

    }).join('');
}

function fullName( item ) {
    return [ item.id, ': ', item.name,' ', item.surname ].join('');
}

console.log( myHtmlView(data) );

```

Output: 

```

<div>
    <span class="styled">1: Mark Wayne</span>
</div>
<div>
    <span class="styled">2: Terese Wayne</span>
</div>
<div>
    <span class="styled">3: Julian Wayne</span>
</div>
<div>
    <span class="styled">4: John Wayne</span>
</div>


```

When the usecase is an object (can be as nested as needed) i.e. like the first example then use the compiler directly.
When the usecase is an array of objects then use a map function to render out each individual object.

Note: Must use map function with a data array. In case of large arrays the compiler will blow out the js
stack available due to recursive nature of the implementation. 
To avoid this use the map function to render out individual data objects and then
concatinate them using .join('') for example.

