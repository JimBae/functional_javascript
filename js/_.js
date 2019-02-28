// function _filter(users, prediFunc) {
//     var newList = [];
//     for (var i=0; i<users.length; i++) {
//         if (prediFunc(users[i])) {
//             newList.push(users[i]);
//         }
//     }
//     return newList;
// }

// function _map(inList, mapper) {
//     var newList = [];
//     for(var i=0; i<inList.length; i++) {
//         newList.push( mapper(inList[i]) );
//     }
//     return newList;
// }

function _filter(inList, predictFunc) {
    var newList = [];
    _each(inList, function(val) {
        if (predictFunc(val)) {
            newList.push(val)
        }
    });
    return newList;
}

function _map(inList, mapper) {
    var newList = [];
    _each(inList, function(val) {
        newList.push(mapper(val));
    });
    return newList;
}

function _each(inList, iter) {
    for(var i=0; i<inList.length; i++) {
        iter(inList[i]);
    }
    return inList;
}

