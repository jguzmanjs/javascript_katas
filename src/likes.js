/*
Implementa una funcion que recibe un array de nombre y los muestra de la siguiete manera:

    []                                      -->  "no one likes this"
    ["Joseph"]                         -->  "Joseph likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "Alex", "Mark"]           -->  "Max, Alex and Mark like this"
    ["Peter", "Jacob", "Matt", "Max"]  -->  "Peter, Jacob and 2 others like this"

    */

function likes(names) {
       
       
        if(!names.length){
                return 'no one likes this'
        }
        
        
        if(names.length == 1){
             return `${names} likes this`;
        }

        if(names.length>0 && names.length<3){
                
            return `${names.join(" and ")} like this`;
        
        }
        
        if(names.length == 3){
                
             return `${names[0]}, ${names[1]} and ${names[2]} like this`  ;
                
        }else if(names.length>=4){
               
             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`  ;
                    

        }

       
}

console.log(likes(['Miguel','Jesús' , 'Adri' , 'Abra' , 'Carmen' , 'Marina' , 'Carlos']));



module.exports = likes;
