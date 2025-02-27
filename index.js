const movies = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        genre: 'Suspense',
        cast: [
            {
                name: 'Jimmy Stewart',
                role: 'L.B. Jefferies',
                gender: 'male'
            },
            {
                name: 'Grace Kelly',
                role: 'Lisa Fremont',
                gender: 'female'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        genre: 'Suspense',
        cast: [
            {
                name: 'Janet Leigh',
                role: 'Marion Crane',
                gender: 'female'
            },
            {
                name: 'Anthony Perkins',
                role: 'Norman Bates',
                gender: 'male'
            }
        ]
    },
    {
        title: "Rosemary's Baby",
        year: 1968,
        director: 'Roman Polanski',
        genre: 'Horror',
        cast: [
            {
                name: 'Mia Farrow',
                role: 'Rosemary Wodehouse',
                gender: 'female'
            },
            {
                name: 'John Cassavetes',
                role: 'Guy Wodehouse',
                gender: 'male'
            }
        ]
    },
    {
        title: 'In the Mouth of Madness',
        year: 1994,
        director: 'John Carpenter',
        genre: 'Horror',
        cast: [
            {
                name: 'Sam Neill',
                role: 'John Trent',
                gender: 'female'
            },
            {
                name: 'Julie Carmen',
                role: 'Linda Styles',
                gender: 'female'
            }
        ]
    }
];

// Use the native filter method to return a new array of only the movies that came out in the 1960s

let filteredMovies = movies.filter(movie => movie.year >= 1960 && movie.year <= 1969)

console.log(filteredMovies)

// Use the native filter method to return a new array of any movies with an actor who's first name
    // begins with 'J'

    let filteredActors = movies.filter(function(movies){
        let cast = movies.cast
        for(let i = 0; i < cast.length; i++){
            if(cast[i].name[0] === 'J')
            return cast[i].name
        }
    }
    )

console.log(filteredActors)
// Use the native map method to return a new array of only the film's directors
let directors = movies.map(movie => movie.director)

console.log(directors)
// Use the native map method to return a new array of strings of the film's titles and lead actor
/*
example output:

[
    "Rear Window - Lead actor: Jimmy Stewart",
    "Psycho - Lead actor: Janet Leigh",
    "Rosemary's Baby - Lead actor: Mia Farrow",
    "In the Mouth of Madness - Lead actor: Sam Neill"
]
*/

// Use the native reduce method to return a new array of the number of films that are horror films

// Use the native reduce method 