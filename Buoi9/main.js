let randomNumber;
const myPromise = new Promise((resolve, reject) => {
    randomNumber = Math.random() * 100;

    //fulfilled
    if(randomNumber > 50) resolve(randomNumber);

    //rejected
    else if(randomNumber < 10) reject(randomNumber);
});

myPromise
    .then(function (fulfilledNumber){
        console.log('fulfill (>50): ', randomNumber/100+randomNumber%100);
    })
    .catch(function(rejectNumber){
        console.log('reject (<10): ', 'Số nhỏ quá');
    })