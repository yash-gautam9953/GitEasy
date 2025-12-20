# Refresh PATH in current terminal without restarting
Write-Host "Refreshing PATH environment variable..." -ForegroundColor Yellow

# Get the machine PATH
$machinePath = [Environment]::GetEnvironmentVariable('Path', 'Machine')

# Get the user PATH
$userPath = [Environment]::GetEnvironmentVariable('Path', 'User')

# Combine them
$env:Path = $machinePath + ';' + $userPath

Write-Host "✓ PATH refreshed successfully!" -ForegroundColor Green
Write-Host "`nTrying to run giteasy..." -ForegroundColor Cyan

# Test if giteasy works now
try {
    giteasy help
} catch {
    Write-Host "✗ Still not working. Please close this terminal and open a new one." -ForegroundColor Red
}
