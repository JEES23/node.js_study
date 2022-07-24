const _ = require('underscore');    //underscore 모듈 가져와 상수 _에 넣기

var arr = [3,6,9,1,12];     //배열 arr 생성

console.log(arr[0]);      //(자바스크립트) 배열 arr의 0인덱스 출력
console.log(_.first(arr));  //(_) 배열 arr의 첫 번째 출력
console.log(arr[arr.length-1]);   //(자바스크립트) 배열 arr의 length-1인덱스 (마지막 인덱스) 출력
console.log(_.last(arr));   //(_) 배열 arr의 마지막 출력
