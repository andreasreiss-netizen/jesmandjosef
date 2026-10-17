@echo off
cd /d "%~dp0"
python -m pip install -r requirements.txt
python tools\build_data.py
echo.
echo Fertig. Jetzt data\woerterbuch.js auf GitHub hochladen.
pause
