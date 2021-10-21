
// var myObject = {

//     name : 'Sezer',
//     lastname : 'Bölük',

//     strTolowerCase: function() {
//         console.log('yazilar küçüldü')
//         return this;
//     },

//     strToUpperCase: function() {
//         console.log('yazilar büyüdü')
//         return this;
//     },
//     x: function() {
//         console.log('wew');
//     },
//     arr : ['1',2,3,4,5,6,7]
// }


// myObject.strTolowerCase().strToUpperCase().x();

// var x =  [
//     'x',
//     '1',
// ];





// var $ = {
//     name: function(name) {
//          this.name = document.querySelector(name)
//          return this;
//     },

//     html: function(name) {
//      return  this.name.innerHTML === '' ? 'Hiç bir yazı bulunamadı' :  this.name.innerHTML
//     }
// }



// let innetText =  $().name('.deneme').html();

// console.log(innetText);


function $(elemnt) {

    this.elmnt = document.querySelector(elemnt)
    
    if(this.elmnt === null) {
        this.elmnt = document.getElementsByTagName(elemnt)
    }
   
    return this;
}

$.prototype.html = function() {
   return  this.elmnt.innerHTML;
}


$.prototype.val = function() {

}

let x = new $('#deneme_1').html()

console.log(x);


let sayi = 'deneme123'

function filter_(par) {

    if(par === 'deneme123') {
        return 'tehlikeli kelime algılandı';
    } 

    return par + '- her şey yolunda';



}

let x__ = filter_('deneme123')

console.log(x__);




