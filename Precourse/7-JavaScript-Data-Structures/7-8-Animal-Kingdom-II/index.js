const greatWhiteShark = {
    myKingdom: 'Animalia',
    myPhylum: 'Chordata',
    myClass: 'Chondrichthyes',
    myOrder: 'Lamniformes',
    myGenus: 'Charcharodon',
    mySpecies: 'charcharias',
    // add method here 
    getScientificName: function(){
        let scientificName = this.myGenus + ' ' + this.mySpecies;
        return(scientificName);
    }
};

console.log(greatWhiteShark.getScientificName());