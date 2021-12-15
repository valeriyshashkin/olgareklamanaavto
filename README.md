## Деплой на шаред хостинг

Сначала нужно собрать сайт:

```bash
npm run build
```

После чего прописать в Passenger для Apache путь к файлу сервера

```
PassengerNodejs /home/первая буква логина/логин/.local/bin/node
PassengerAppRoot /home/первая буква логина/логин/папка сайта/название_проекта
PassengerAppType node
PassengerStartupFile index.js
```

## Узнать подробнее

Узнать подробнее о деплое на шаред хостинг:

- [Beget](https://beget.com/ru/kb/how-to/web-apps/node-js#sozdanie-htaccess) - запуск Node.js приложения на шаред хостинге Beget.
