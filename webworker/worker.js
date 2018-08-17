if (typeof (Worker) !== undefined) {
    //write code
    var i = 0;

    function counter() {
        i = i + 1;
        postMessage(i);
    }
}
else {
   console.log('Web worker not supported');
}

counter();