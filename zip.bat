@echo off
setlocal

set "ZIP_NAME=beauty.zip"
set "TEMP_DIR=%TEMP%\zip_build_%RANDOM%"

echo ==========================================
echo Building archive %ZIP_NAME%...
echo ==========================================

if exist "%ZIP_NAME%" del /f /q "%ZIP_NAME%"
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
mkdir "%TEMP_DIR%"

echo Copying files (excluding dist, node_modules, .git, .idea, .figma)...
robocopy "." "%TEMP_DIR%" /E /XD dist node_modules .git .idea .figma .prerender /XF zip.bat /NFL /NDL /NJH /NJS /NP >nul

echo Creating zip archive...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "Compress-Archive -Path '%TEMP_DIR%\*' -DestinationPath '%ZIP_NAME%' -Force"

echo Cleaning up...
rmdir /s /q "%TEMP_DIR%"

echo ==========================================
if exist "%ZIP_NAME%" (
    echo SUCCESS: %ZIP_NAME% created.
) else (
    echo ERROR: Archive was not created.
)
echo ==========================================
pause