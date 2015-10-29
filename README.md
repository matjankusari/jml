A library used to transpile json into html. 

Uses a simple string transformation technique to turn a json structure into html.

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
