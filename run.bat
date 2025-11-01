@echo off
REM run.bat — start a local HTTP server and open index.html in the default browser
REM Usage: run.bat [port]

cd /d "%~dp0"
set PORT=8000
if not "%1"=="" set PORT=%1

echo Starting local HTTP server in %CD% on port %PORT%...

nwhere py >nul 2>&1
nif %ERRORLEVEL%==0 (
    start "MAIBOOK-server" cmd /k py -3 -m http.server %PORT%
) else (
    where python >nul 2>&1
    if %ERRORLEVEL%==0 (
        start "MAIBOOK-server" cmd /k python -m http.server %PORT%
    ) else (
        echo Python not found. Please install Python and ensure it's on your PATH.
        pause
        exit /b 1
    )
)

nREM give the server a moment to start, then open the browser
timeout /t 1 >nul
start "" "http://localhost:%PORT%/index.html"
echo Launched browser to http://localhost:%PORT%/index.html
echo (Close the "MAIBOOK-server" window to stop the server.)
exit /b 0
