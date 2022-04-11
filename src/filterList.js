/*Crea una funcion que recibe un array y devuelve otro filtrando solo los numeros (leer sobre typeof y quizas utilizar la funcion de arrays 'filter')

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
    //let arrayNumeros =[];
    let filtro = l.filter((item)=>{

           return (typeof(item) == "number");
                
    });
    
    return filtro
}

module.exports = filter_list;
