@ECHO OFF

set DIR=%~dp0

set PGUSER=postgres
set PGHOST=localhost
set PGPASSWORD=''
set PGDATABASE=postgres
set PGPORT=5432
set API_PORT=8080
set API_DATADIR=c:\\tmp\\media-manager-data
%DIR%\node_modules\.bin\nodemon --legacy-watch --watch %DIR%\src --exec "node --max-old-space-size=512 --inspect=127.0.0.1:9229" %DIR%\src\app.js
