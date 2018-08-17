var worker;
function startTask() {
    if (typeof (Worker) !== undefined) {
        if (typeof (worker) !== undefined) {
            worker = new Worker("worker.js");

            worker.onmessage = function (event) {
                document.getElementById("result").innerHTML = event.data;
            }
        }
    }
}

function stopTask() {
    worker.terminate();
    worker = undefined;
}