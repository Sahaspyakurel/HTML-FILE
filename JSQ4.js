var cat = {
    name : 'Fluffy',
    activites : ['play','eat cat food'],
    catFriends : [
        {
            name : 'bar',
            activites : ['be grumpy', 'eat bread omlet'],
            weight : 8,
            furcolor : 'white'
        },
        {
            name : 'foo',
            activites : ['sleep','pre-sleep naps'],
            weight : 3
        }
    ]
}

cat.catFriends.forEach(catFriend => console.log(catFriend.activites));

var activities = cat.catFriends.map(catFriend => catFriend.activites);
console.log(activities);


var totalWeight = 0;
for (var i = 0; i < cat.catFriends.length; i++) {
    totalWeight += cat.catFriends[i].weight;
}


console.log("Total weight of cat friends: " + totalWeight);

var totalWeight = cat.catFriends.map(catFriend => catFriend.weight)
                              .reduce((acc, weight) => acc + weight, 0);

console.log("Total weight of cat friends: " + totalWeight);