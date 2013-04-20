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
load our sql dump-file 'rss'
npm install
cd public/js
bower install
grunt run
```

## Description


Для получения информации о своих лентах реализовано like rest API

example

get /feed

post /feed

delete /feed

get /article

После запуска приложения сервер скачивает articles пользователя в зависимости от лент
на которые он подписан и далее поддерживает базу в актуальном состоянии, синхронизируя ее каждый
определенный промежуток времени. При добавлении новыx лент, при следующей синхронизации их articles
будут загружены.

итого:
Регистрация/вход в сервис
Подписка/отписка на RSS фиды
Кнопка для проверки обновлений по фидам




## License

Copyright (c) 2013 110A uwcua
