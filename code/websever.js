const http = require('http');       //http 모듈 가져와 http 상수에 넣기

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {    //서버 생성 + listen 호출 가능(객체지향)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');     //응답 결과 : Hello World 출력
});

server.listen(port, hostname, () => {   //3000번 포트를 listen하는 서버를 만들고, 127.0.0.1로 접속한 사용자에 대해 응답하라
  console.log(`Server running at http://${hostname}:${port}/`);
});
