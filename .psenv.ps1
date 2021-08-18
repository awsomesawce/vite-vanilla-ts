#!/usr/bin/env -S pwsh -noprofile
# Do not run this file, dot-source it.
<#
.SYNOPSIS
Loads .psenv.ps1 file from templates directory in dotfiles repo
.Description
Instead of copying the file individually to each project, import it from one source of truth.
.NOTES
TODO: Change up the syntax of .psenv.ps1 so it can be imported with `Import-Module`, and rename
to ".psenv.psm1"
#>

$psenvFile = if (Test-Path $env:USERPROFILE\gitstuff\my-dotfiles\templates\.psenv.ps1) {
    (Get-Item $env:USERPROFILE\gitstuff\my-dotfiles\templates\.psenv.ps1).toString()
} else {
    throw "psenv.ps1 file not found"
}
Write-Output "Loaded psenv.ps1 file from $psenvFile"
. $psenvFile
