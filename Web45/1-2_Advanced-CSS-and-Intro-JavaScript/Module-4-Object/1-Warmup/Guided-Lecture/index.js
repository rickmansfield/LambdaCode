const places = [
    {city: 'Kigali', country: 'Rwanda', region: 'East Africa'},
    {city: 'Amman', country: 'Jordan', region: 'Middle East'},
    {city: 'Najaf', country: 'Iraq', region: 'Middle East'},
    {city: 'Panama', country: 'Panama', region: 'South America'},
    {city: 'Malaga', country: 'Spain', region: 'Europe'},
    {city: 'San Paulo', country: 'Brazil', region: 'South America'},
    {city: 'Abuja', country: 'Nigeria', region: 'West Africa'},
    {city: 'Mumbai', country: 'India', region: 'South Asia'},
    {city: 'Auckland', country: 'New Zealand', region: 'Oceania'},
    {city: 'San Francisco', country: 'USA', region: 'North America'},
    {city: 'Bucharest', country: 'Romania', region: 'Europe'},
  ];
//   the following didn't work. 

/*   function findRegion(array){
    const newArray = [];
  for (let i =0; array.length < i; i++){
        if (array[i].region === 'South Asia'){
        newArray.push(array[i].region);
        
        }
        return newArray;
        }
    }
 console.log(findRegion(places));
 */  

// this code does work. 