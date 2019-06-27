
var hobbiesArray = [{name: 'Wine Collecting',howLong: 15},
{ name: 'Clock Repair',howLong: 40},
{name:'Playing Drums', howLong:50}
];



function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.howLong} years.`)
}




hobbiesArray.forEach(function(element) {
    printHobbyInfo (element);
    
});