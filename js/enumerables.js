// Create RangeEnumerable(fromX, toY) which takes two arguments, and produces a range of integers from fromX to toY, inclusive.
//
// For example, given the following line:
//
// var enumerable = RangeEnumerable(1, 5);
// If one were to enumerate through "enumerable", one would get 1, 2, 3, 4, 5


function RangeEnumberable(fromX, toY) {
    var cancelled = false;

    var options = {
        cancelled: function () {
            cancelled = true;
        }
    }

    var result = {
        enumerate: function(callback) {
            for (var x = fromX; x <= toY; ++x) {
                if (cancelled) {
                    break;
                }
                callback(x, options);
            }
        }
    };
    return result;
}

var testEnum = RangeEnumerable(1,10);
testEnum.enumerate(function (item, loop) {
    console.log(item);

    if (item > 40) {
        loop.cancel();
    }
})
