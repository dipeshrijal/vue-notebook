
var arr = [
    { id: 1, name: 'Android', score: [{ score: 20, bonus: 15 }] },
    { id: 2, name: 'Php', score: [{ score: 10, bonus: 25 }] },
    { id: 3, name: 'React', score: [{ score: 40, bonus: 45 }] },
    { id: 4, name: 'React Native', score: [{ score: 30, bonus: 25 }] }
];

// var arr1 = [
//     { id: 1, name: 'Android', score: 20, bonus: 15 },
//     { id: 2, name: 'Php', score: 10, bonus: 25 },
//     { id: 3, name: 'React', score: 40, bonus: 45 },
//     { id: 4, name: 'React Native', score: 30, bonus: 25 }
// ];

// const totalScore = arr1
//     .map(arrnew => arrnew.score + arrnew.bonus)
//     .reduce((acc, newscore) => acc + newscore, 0);

// console.log(totalScore)

const totalScore = arr.map(newarr => newarr.score)
    .map(score => {
        return score.map(s => s.score).reduce((x, y) => {
            x + y, 0
        })
    }).reduce((x, y) => x + y, 0)

console.log(totalScore)


// const devs = [{ "name": "A", "age": 26, "tech": ["JavaScript", "React"], "addr": { "country": "India", "city": "Pune" } }, { "name": "B", "age": 25, "tech": ["Node", "AngularJs"], "addr": { "country": "USA", "city": "NY" } }, { "name": "C", "age": 27, "tech": ["Java", "AWS"], "addr": { "country": "UK", "city": "London" } }];
// const devReact = devs.map(obj => ({ "name": obj.name, "tech": obj.tech }));
// console.log(devReact);

// const aapl = [{ "_id": "5f8214e95abc630a0faff843", "ticker": "AAPL", "transactions": [{ "quantity": "1", "amount": 524.33, "description": "Sold 1 AAPL Oct 30 2020 116.0 Call @ 5.25", "action": "Sell", "price": "5.25", "broker": "TD Ameritrade", "date": "2020-10-09T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 118.0 Call @ 1.96", "amount": -196.66, "action": "Buy", "price": "1.96", "broker": "TD Ameritrade", "date": "2020-10-09T05:00:00.000Z", "commission": "0.65", "regfee": "0.01" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 30 2020 116.0 Call @ 4.55", "amount": "-455.66", "action": "Buy", "price": "4.55", "broker": "TD Ameritrade", "date": "2020-10-06T05:00:00.000Z", "commission": "0.65", "regfee": "0.01" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 30 2020 116.0 Call @ 5.3", "amount": "-530.66", "action": "Buy", "price": "5.3", "broker": "TD Ameritrade", "date": "2020-10-05T05:00:00.000Z", "commission": "0.65", "regfee": "0.01" }, { "quantity": "1", "description": "Sold 1 AAPL Oct 2 2020 111.25 Put @ 2.43", "amount": "242.33", "action": "Sell", "price": "2.43", "broker": "TD Ameritrade", "date": "2020-09-25T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 2 2020 111.25 Put @ 2.76", "amount": "-276.66", "action": "Buy", "price": "2.76", "broker": "TD Ameritrade", "date": "2020-09-25T05:00:00.000Z", "commission": "0.65", "regfee": "0.01" }, { "quantity": "3", "description": "Sold 3 AAPL Sep 25 2020 120.0 Call @ 2.37", "amount": "708.97", "action": "Sell", "price": "2.37", "broker": "TD Ameritrade", "date": "2020-09-15T05:00:00.000Z", "commission": "1.95", "regfee": "0.08" }, { "quantity": "3", "description": "Bought 3 AAPL Sep 25 2020 120.0 Call @ 2.3", "amount": "-692", "action": "Buy", "price": "2.3", "broker": "TD Ameritrade", "date": "2020-09-15T05:00:00.000Z", "commission": "1.95", "regfee": "0.05" }, { "quantity": "3", "description": "Sold 3 AAPL Jan 15 2021 120.0 Call @ 7.8", "amount": "2337.94", "action": "Sell", "price": "7.8", "broker": "TD Ameritrade", "date": "2020-09-11T05:00:00.000Z", "commission": "1.95", "regfee": "0.11" }, { "quantity": "3", "description": "Bought 3 AAPL Jan 15 2021 120.0 Call @ 8.95", "amount": "-2687", "action": "Buy", "price": "8.95", "broker": "TD Ameritrade", "date": "2020-09-10T05:00:00.000Z", "commission": "1.95", "regfee": "0.05" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 2.72", "amount": "-272.67", "action": "Buy", "price": "2.72", "broker": "TD Ameritrade", "date": "2020-09-04T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 4.1", "amount": "-410.67", "action": "Buy", "price": "4.1", "broker": "TD Ameritrade", "date": "2020-09-03T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 5.05", "amount": "-505.67", "action": "Buy", "price": "5.05", "broker": "TD Ameritrade", "date": "2020-09-02T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 4.27", "amount": "-427.67", "action": "Buy", "price": "4.27", "broker": "TD Ameritrade", "date": "2020-09-02T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 6.05", "amount": "-605.67", "action": "Buy", "price": "6.05", "broker": "TD Ameritrade", "date": "2020-09-02T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "1", "description": "Bought 1 AAPL Oct 16 2020 145.0 Call @ 6.05", "amount": "-605.67", "action": "Buy", "price": "6.05", "broker": "TD Ameritrade", "date": "2020-09-02T05:00:00.000Z", "commission": "0.65", "regfee": "0.02" }, { "quantity": "3", "description": "Sold 3 AAPL Sep 18 2020 132.5 Call @ 5.46", "amount": "1635.95", "action": "Sell", "price": "5.46", "broker": "TD Ameritrade", "date": "2020-09-01T05:00:00.000Z", "commission": "1.95", "regfee": "0.1" }, { "quantity": "3", "description": "Bought 3 AAPL Sep 18 2020 132.5 Call @ 4.9", "amount": "-1472", "action": "Buy", "price": "4.9", "broker": "TD Ameritrade", "date": "2020-08-31T05:00:00.000Z", "commission": "1.95", "regfee": "0.05" }, { "quantity": "10", "description": "Sold 10 AAPL @ 394.61", "amount": "3946.01", "action": "Sell", "price": "394.61", "broker": "TD Ameritrade", "date": "2020-07-13T05:00:00.000Z", "commission": "0", "regfee": "0.09" }, { "quantity": "10", "description": "Bought 10 AAPL @ 375.01", "amount": "-3750.1", "action": "Buy", "price": "375.01", "broker": "TD Ameritrade", "date": "2020-07-07T05:00:00.000Z", "commission": "0", "regfee": "" }] }, { "_id": "5f8214ea5abc630a0faff844", "ticker": "MRK", "transactions": [{ "quantity": "1", "amount": "-97.66", "description": "Bought 1 MRK Oct 16 2020 80.0 Call @ 0.97", "action": "Buy", "price": "0.97", "broker": "TD Ameritrade", "date": "2020-10-09T05:00:00.000Z", "commission": "0.65", "regfee": "0.01" }] }]


// const totalScore = aapl
//     .map(arrnew => arrnew.transactions.map(amount => {
//         let a = parseFloat(amount.amount)
//         return a
//     }))
//     .reduce((acc, newscore) => acc + newscore, 0);

// console.log(totalScore)