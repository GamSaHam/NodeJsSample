
console.time('timeCheck');

var value = 1;
for (var i = 0; i < 10000000; i++)
{
    for (var i = 0; i < 10000000; i++) {
        for (var i = 0; i < 10000000; i++) {
            value = value * i;
        }
    }
}

console.timeEnd('timeCheck');


console.log('test');