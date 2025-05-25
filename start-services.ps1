$backendProcess = Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ".\backend" -PassThru -NoNewWindow
$frontendProcess = Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory ".\frontend" -PassThru -NoNewWindow

Write-Host "Serviços iniciados. Pressione Ctrl+C para parar..."
try {
    Wait-Process -Id $backendProcess.Id, $frontendProcess.Id
} finally {
    if (!$backendProcess.HasExited) { Stop-Process -Id $backendProcess.Id }
    if (!$frontendProcess.HasExited) { Stop-Process -Id $frontendProcess.Id }
} 