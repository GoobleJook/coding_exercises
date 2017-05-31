process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine()); // length of array
        q = readLine().split(' ');
        q = q.map(Number); // array of numbers
        // your code goes here\
        var bribe_count = 0;
        var total_bribes = 0;
        
        for (i = 0, j = 1; i < q.length; i++, j++) {
            if (q[i] > q[j]) {
                bribe_count += 1;
                total_bribes += 1;
                if (q[i] > q[j + 1]) {
                    bribe_count += 1;
                    total_bribes += 1;
                    if (q[i] > q[j + 2]) {
                        total_bribes = "Too chaotic"
                    }
                }
            }            
        } console.log(total_bribes)
   }
}

