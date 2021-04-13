

// print data

const  printAllElements = (items) => {
    for (let i = 0; i<items.length; i++ ) {
       // console.log(items[i].type);
        let item = document.createElement('li');
        item.innerHTML = `${(i+1)}. ${items[i].firstName} ${items[i].age} id=${items[i].id}`;
        document.getElementById('all-quizes-container').appendChild(item);
     }
}
// print quizes category

const  printQuizesCategory = (items) => {
  for (let i = 0; i<items.length; i++ ) {
     // console.log(items[i].type);
      let item = document.createElement('li');
      item.innerHTML = ` ${items[i].quiz_id} ${items[i].quiz_name} : ${items[i].quiz_description}`;
      document.getElementById('all-quizes-container').appendChild(item);
   }
}
// say
const hello = () => console.log('hello Hell');

//print propety of object
const  printPropetyOfObject = (item) => {
    console.log(item.firstName);
    
    document.getElementById('get-name').value = item.firstName;
    document.getElementById('get-age').value = item.age;
  /*     
    let item = document.createElement('li');
        item.innerHTML = `${(i+1)}. ${items[i].firstName}`;
        document.getElementById('add_data').appendChild(item);
  */ 
}
//print status
const  statusRequery = (item) => {
  
   // console.log(item);
    document.getElementById('status-name').value = item.status;
    document.getElementById('query-name').value = item.url;
}
export {hello, printAllElements, printPropetyOfObject, statusRequery, printQuizesCategory };
