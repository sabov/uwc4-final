#  NodeJS Feedparser

We parse your feeds in node.js using
Isaac Schlueter's [sax](https://github.com/isaacs/sax-js) parser.

## Requirements

    "express": "3.0.3",
    "jade": "*",
    "async": "~0.2.7",
    "connect": "~2.7.6",
    "mysql": "~2.0.0-alpha7",
    "xtend": "~2.0.3",
    "forever": "~0.10.0",
    "feedparser": "~0.15.2",
    "request": "~2.16.6"

## Installation

```bash
git clone
load our sql dump-file 'reader'
npm install
grunt dev||prod
```

## Description


Для получения информации о своих лентах реализовано like rest API

example

get /feed
post /feed
delete /feed

get /article

после запуска приложения сервер скачивает articles пользователя в зависимости от лент
на которые он подписан и далее поддерживает базу в актуальном состоянии, синхронизируя ее каждый
определенный промежуток времени. При добавлении новыx лент, при следующей синхронизации их articles
будут загружены. Ленты могут находиться в разных категориях(папках). Ленты можно удалять.
Планируется live update новых артиклов на клиенте посредством soket io


## License

Copyright (c) 2013 110A uwcua

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.