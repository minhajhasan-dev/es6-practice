const person = {name: 'Jack William', job: 'facebooker', gfName:'Emma Watson', address: 'katabon', phone: 01712345678};
const {phone, gfName} = person;
// const gfname = person.gfName;
// const phone = person.phone;
// console.log(gfName,phone);
// console.log(gfName);
// console.log(gfName);
// console.log(gfName);

const friends = ['sakib khan', 'amir khan', 'salman kham', 'shahrukh khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;
console.log(leader);