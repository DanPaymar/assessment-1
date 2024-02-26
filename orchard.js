///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// create the variable totalAcres and set it's value to 0
let totalAcres = 0 


for (let i = 0; i < 7; i++) {
    totalAcres = totalAcres + fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log('Total acres picked:', totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = 0


averageDailyAcres = totalAcres / 7 // take averageDailyAcres and change its value to totalAcres / 7
console.log(averageDailyAcres) // show the average daily acres in the console


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174
let days = 0

// CODE HERE

while (acresLeft > 0) { 
    acresLeft -= averageDailyAcres
    console.log('Days left:', days)

    days++
}


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store
    your new arrays. Make sure that you
    don't modify the original arrays
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method
    to make copies of the arrays and
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new
    values to the new arrays.
*/

// CODE HERE

// declare a new variable and assign it a copy of fuji acre array
let fujiTons = fujiAcres.slice()
console.log(fujiTons) // confirm new array

// loop over the length of fuji ton array
for (let i = 0; i < fujiTons.length; i++) {
    if (fujiTons[i]) {
         // at each position multiply by 6.5
       fujiTons[i] *= 6.5
    }
    console.log('Daily amount:', fujiTons)
}

let galaTons = galaAcres.slice()

for (let i = 0; i < galaTons.length; i++) {
    if (galaTons[i]) {
        galaTons[i] *= 6.5
    }
    console.log('Daily gala amount:', galaTons)
}

let pinkTons = pinkAcres.slice()

for (let i = 0; i < pinkTons.length; i++) {
    if (pinkTons[i]) {
        pinkTons[i] *= 6.5
    }
    console.log('Daily pink amount:', pinkTons)
}

// PROBLEM 5

/*
    Next, calculate the total number of
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number
    into pounds -- store that number in
    the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// make a copy of fujiTons and assign it to a new variable fujiPounds
let fujiPounds = fujiTons.slice()
// declare a total and set it to value of 0. Declare fuji conversation to hold the total in pounds.
let total = 0
let fujiConverstion = 0
// loop over the length of the fuji pound array
for (let i = 0; i < fujiPounds.length; i++) {
    // for each iteration multiply by 2000
    if (fujiPounds) {
        fujiPounds[i] *= 2000
    }
    // add each iteration of the array as it is multiplied
    fujiConverstion = total += fujiPounds[i]

}
// log the total amount in pounds
console.log('Total fuji pounds:', total)

// copy galtons to gala pounds
let galaPounds = galaTons.slice()
let galaConverstion = 0

for (let i = 0; i < galaPounds.length; i++) {
    if (galaPounds) {
        galaPounds[i] *= 2000
    }
    galaConverstion = total += galaPounds[i]
}
console.log('Total gala pounds:', total)

// copy pink tons to pink pounds
let pinkPounds = pinkTons.slice()
let pinkConverstion = 0

for (let i = 0; i < pinkPounds.length; i++) {
    if (pinkPounds) {
        pinkPounds[i] *= 2000
    }
    pinkConverstion = total += pinkPounds[i]
}
console.log('Toal pink pounds:', total)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given
    at the beginning of this file to
    figure out how much you'll make
    from selling each type of apple.

    The prices are per pound and are
    written in cents.

    Log each of the profits to the
    console.
*/

// CODE HERE

// const fujiPrice = .89
// const galaPrice = .64
// const pinkPrice = .55

let fujiProfit = fujiPrice * fujiConverstion
console.log('Fuji profit:',`\$${fujiProfit}`)

let galaProfit = galaPrice * galaConverstion
console.log('Gala profit:', `$${galaConverstion}`)

let pinkProfit = pinkPrice * pinkConverstion
console.log('Pink profit:', `$${pinkConverstion}`)






// PROBLEM 7

/*
    Add up all your profits and save
    the number to a variable called
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

