'use strict';
const user = 'Abdul Azeem beigh';
const user1 = 'Jonas Schmedtmann';
const user2 = 'Jessica Davis';
const user3 = 'Steven Thomas Williams';
const user4 = 'Sarah Smith';

let username = user.toLowerCase().split(' ').map(function(name){
             return name[0];
}).join('');
/* console.log(username); */

const users = [user1,user2,user3,user4];

const createUserNames = function (accs){
    let usernames = [] ;
     accs.forEach(function(acc){
        usernames.push( acc.toLowerCase().split(' ').map(function(name){
            return name[0];
        }).join(''));
    })
    return usernames;
}

console.log(createUserNames(users));