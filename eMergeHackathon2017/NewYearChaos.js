// Test data sets:
// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

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
        
        var total_bribes = 0;
        
        for (i = 0; i < q.length; i++) {
          var bribe_count = 0;
          for (j = i+1; j <= q.length; j++) {
            if (q[i] > q[j]) {
                total_bribes += 1
                bribe_count += 1
            }
            if (bribe_count >= 3) {
          console.log("too chaotic");
          break;
        } 
          }
        } console.log(total_bribes)
        
    } 
}

