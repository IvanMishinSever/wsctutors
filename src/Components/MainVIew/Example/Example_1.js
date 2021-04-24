

import React from 'react';


export default class Example1 extends React.Component{
    render() {
     /*
        //PROMISES
        //1   
      const promise = new Promise ((resolved, rejected) => {
          setTimeout(() => {resolved(500);}, 200);
      });
        promise.then((res) => {
            const sum = res + res;
            console.log(sum);
        }, (err) => {
            alert('ERROR');
        })
        // 1-1
        const num1 = 56;
        const num2 = 88;
        const promise_3 = new Promise ((resolved, rejected) => {
            setTimeout(() => {resolved(num1 + num2);}, 200);
        });
          promise.then((res) => {
             
              console.log(res * 2);
          }, (err) => {
              alert('ERROR');
          })




    //promise object
    const promise_1 = new Promise (function(resolve, reject) {
        let condition = true;
        if (condition) {
            resolve ("OK");
        } else {
            reject(Error("failed"));
        }
    });

    console.log(promise_1);
   // promise_1.then((res) =>{console.log(res)}, (err) => alert(err));

    //3
    const promise_2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('happy env day');
        }, 1000);
        
    });
    const uppercase = (val) => {
        console.log(val);
        const returnValue = val.toUpperCase();
        return returnValue;
    };
    const addFullStop = (val) => {
        console.log(val);
        const returnValue = `${val}.`;
        const print = (val) => {
            console.log(val);
        };
    }
    const print = (val) => {
        console.log(val);
    }
promise_2.then(uppercase).then(addFullStop).then(print);


// rejected promise catch
const promise_4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('THE API WAS FAILED!!'));
    }, 5000);
})
//promise_4.then((res) => { console.log('fuck!!!')});
promise_4.catch((err) => { console.log(err)});

// catch
const promise_7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('Promise rejected'));
    }, 1000);
});

const resolvedHandler = (val) => {
    console.log(val);
}
const rejectedHandler = (err) => {
    console.log(err);
};

//promise_7.then(resolvedHandler);
promise_7.catch(rejectedHandler);






// chainig multiple then
const promise_5 = new Promise(resolve => setTimeout(() => resolve('Sasin'), 100));

promise_5.then(res => {return res === 'Sasin' ? Promise.resolve('hey Sasin!') : Promise.reject(' who are you?')}).then((res) =>{
console.log(res)}, (err) => {
    console.log(err);
});

//decrease 10 promise composition
const promise_6 = new Promise(
        resolve => setTimeout(() => 
        resolve(200), 100)
    );
promise_6.then(res => Promise.resolve(res -10)).then(res => Promise.resolve(res -10)).then(res => Promise.resolve(res -10)).then(
 (res) => {
     res = res -10;
     console.log(res);
 });

 //composition
 const promise_8 = new Promise(resolve => setTimeout(() => resolve(5), 100));
 promise_8.then(res1 => {
     return res1 == 5 ? Promise.resolve(res1 + 10) : Promise.reject('EXPECTED 5.')
 }).then ((res2) => { console.log("res2 " + res2)}, (err) => { console.log(err)});

 //setitmeout
 let winner = 'IVAN';
 console.log(winner);
 setTimeout(() => {
     winner = 'mishin'
     console.log(winner);
 }, 5000);
*/
 


    //RETURN
        return (
            <div>
                <h1>hello </h1>
            
            </div>
        );
    }
};
 
//React.render(<App />, document.getElementById('app'));