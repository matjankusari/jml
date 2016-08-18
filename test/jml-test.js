var expect   = require("chai").expect;
var compiler = require('./../jml');

describe("JMT transpile testing", function() {
  
  it("should convert simple jml into html", function() {

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

		var actual = compiler.parse( jml );
		var expected = '<body><div class="class"><span>Text Node</span></div><table><tr><td>Data</td></tr></table></body>';

		expect( actual ).to.equal( expected );
  });


  it("should convert complicated jml into html (javascript data injection)", function() {

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
		            'div class="wrap"': {
		                h1: 'My title',
		                'span class="styled"': fullName(item)
		            }
		        });

		    }).join('');
		}

		function fullName( item ) {
		    return [ item.id, ': ', item.name,' ', item.surname ].join('');
		}

		var actual = myHtmlView(data);
		var expected = '<div class="wrap"><h1>My title</h1><span class="styled">1: Mark Wayne</span></div><div class="wrap"><h1>My title</h1><span class="styled">2: Terese Wayne</span></div><div class="wrap"><h1>My title</h1><span class="styled">3: Julian Wayne</span></div><div class="wrap"><h1>My title</h1><span class="styled">4: John Wayne</span></div>';

		expect( actual ).to.equal( expected );
  });

});