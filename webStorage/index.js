// // if (typeof (Storage) !== 'undefined') {
//     // localStorage.name = 'User1';
//    console.log(localStorage.name);

// // else {
// //     console.log('Web storage is not supported');
// // }

// function addKey(){
//     localStorage.setItem('name','User1');
// }

// function getData(){
//     var name =localStorage.getItem('name') !== null ? localStorage.getItem('name').toString() : '';
//     document.getElementById('userdetails').innerHTML = name;
// }


// function remove(){
//     localStorage.removeItem("name");
//     getData();
// }



// if (typeof (Storage) !== 'undefined') {
    // localStorage.name = 'User1';
    console.log(sessionStorage.name);

    // else {
    //     console.log('Web storage is not supported');
    // }
    
    function addKey(){
        sessionStorage.setItem('name','User1');
    }
    
    function getData(){
        var name =sessionStorage.getItem('name') !== null ? sessionStorage.getItem('name').toString() : '';
        document.getElementById('userdetails').innerHTML = name;
    }
    
    
    function remove(){
        sessionStorage.removeItem("name");
        getData();
    }