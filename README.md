这是一个在react可在ie8版本中运行的一个开发环境配置

```
git clone https://github.com/dragonflyings/website-demo.git
npm i

正常启动开发服务（IE8不可用）
npm start
访问 http://localhost:3000
或者配置nginx
server {
    listen       300;
    server_name  localhost;
    
    proxy_set_header  Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    proxy_connect_timeout 90;
    proxy_send_timeout 90;
    proxy_read_timeout 90;

    location / {
      try_files $uri /index.html;
      alias F:/workspace/github/website-demo/build/;
      index  index.html;
    }
}

生产环境打包代码（IE8可用）
npm run build
```

antd访问地址：[https://1x.ant.design/docs/react/introduce](https://1x.ant.design/docs/react/introduce)