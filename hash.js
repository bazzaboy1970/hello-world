var MyModule = (function() {
    var items = {};

    has = function(key) {
        return key in items;
    };

    set = function(key, value){
        items[key] = value;
    };

    del = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    get = function(key) {
        return this.has(key) ? item[key] : undefined;
    };

    values = function(){
        var values = [];
        for (var k in Object.keys(items)) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
    };

    keys = function(){
        return Object.keys(items);
    };

    getItems = function() {
        return items;
    };

    return {
        has:has,
        set:set,
        del:del,
        get:get,
        keys:keys,
        values:values,
        getItems:getItems
    };
})();

MyModule.set('A',34);
MyModule.set('C',2);
MyModule.set('T',1231);
MyModule.set('Y',7);
MyModule.set('V',99);
var a = MyModule.has('A');

if (a) { console.log('A is defined');}


console.log(MyModule.keys());
console.log(MyModule.getItems());
console.log(MyModule.values());