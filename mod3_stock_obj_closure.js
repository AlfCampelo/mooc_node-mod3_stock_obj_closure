

function stock (title) {
    let    _title = title;//  Title of stock manager
    const  _stock = {};   //  prods: { <code>: {c: code, desc: <description>,  n: <number>}
 
            /* Returns access object to internal variables, uses ES6 object method syntax */
    return {

        title  ()  {                     /* Returns title of stock manager */
            return _title; 
        },

        new_p (code, desc) {             /* Adds n prods to stock */
            if (!_stock[code]) {
                _stock[code] = {code, desc, n:0};
                return _stock[code];
            };
            return null;
        },

        add (code, n) {   /* if product exists add n and return product, else return null*/
            if (_stock[code]) {
                _stock[code].n += n;
                return _stock[code];
            }
            return null;
        },

            /* if n prods in stock subtract n and return product, else return null*/
        rem (code, n) {
            if ( _stock[code] && _stock[code].n >= n ) {
                _stock[code].n -= n;
                return _stock[code];
            } 
            return null;
        },

        number () {    /* return nuber of prods (length of array of prod objects)  */
            return Object.keys(_stock).length;
        },

       get_p (code) {       /* return product obj if exists or null if it doesn’t  */
            // ....... add code here
            if(_stock[code]){
                return _stock[code];
            }
            return null;
        },

                     /* if code exists eliminate it and return true, else return false  */
        del_p (code) {
            // ....... add code here
            if(_stock[code]){
                delete _stock[code];
                return true;
            }
            return null;
            // .......
        },

                /* Add n to prod if code exists, or create new prod with json params*/
        addJSON (json_prods)  {
            // ....... add code here
           
            const productos = JSON.parse(json_prods);
            Object.keys(productos).forEach((i) => {
                let n = productos[i].n ? productos[i].n : 0;
                if (! _stock[i]) {
                    this.new_p(i, productos[i].desc)    
                } 
                this.add(i, n);
            });
            // .......
        },

        getJSON () {  /* Add n to prod if code exists, or create new prod*/
            return JSON.stringify( _stock );
        },

        reset () {              /*   Remove all products from _stock */
            _stock = {}; 
        }
    }
}



let my_shop = stock("My shop");

console.log();
my_shop.new_p('a1', 'fork');
my_shop.add('a1', 3);
my_shop.new_p('a4', 'spoon');
my_shop.add('a4', 7);
console.log("-> my_shop.new_p('a1', 'fork')");
console.log("-> my_shop.add('a1', 3)");
console.log("-> my_shop.new_p('a4', 'spoon')");
console.log("-> my_shop.add('a4', 7)");

console.log();
console.log("There are " + my_shop.number() + " prods");

console.log();
console.log("_stock= " + my_shop.getJSON());

console.log();
console.log();

my_shop.addJSON('{ "a1":{"n":2}, "a2":{"code":"a2", "desc":"knife", "n": 3}}');
console.log(`-> my_shop.addJSON('{ "a1":{"n":2}, "a2":{"code":"a2", "desc":"knife", "n": 3}}'`);

console.log();
console.log("_stock= " + my_shop.getJSON());

console.log();
console.log();
my_shop.add('a1', 4);
console.log("-> my_shop.add('a1', 4)");

console.log();

console.log("_stock['a1'] = " + JSON.stringify(my_shop.get_p('a1')));
console.log();
console.log();

my_shop.rem('a2', 3);
my_shop.del_p('a4');
console.log("-> my_shop.rem('a2', 3)");
console.log("-> my_shop.del_p('a4')");

console.log();
console.log("_stock=" + my_shop.getJSON());

module.exports = {stock};