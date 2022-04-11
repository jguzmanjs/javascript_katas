/*Devuelve el numero de vocales a partir de un string*/

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    let letra = str.split('');
   
    for(let i =0; i<letra.length; i++){
        if(letra[i] == 'a' || letra[i] == 'e' || letra[i] == 'i' || letra[i] == 'o' || letra[i] == 'u'){

                vowelsCount++;

        }

    }
    return vowelsCount;
}


module.exports = getCount;
