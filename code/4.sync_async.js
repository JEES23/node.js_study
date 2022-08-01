var fs = require('fs');

//Sync
// 1출력, read 'data.txt' 작업 완료 후 data 출력
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);


//Async
// 2출력, read 'data.txt' 작업을 백그라운드에게 맡긴 후 작업이 되는 시간에 4출력 이후 작업이 완료되면 콜백함수 실행(3출력 후 data 출력)
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){ //'data.txt' 가 같은 폴더 내에 존재
  console.log(3);
  console.log(data);
})
console.log(4);
