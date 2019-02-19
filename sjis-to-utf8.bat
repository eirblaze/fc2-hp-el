Get-ChildItem D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html `
-Recurse -Include *.html | `
Rename-Item -NewName {$_.FullName + ".bkup"}


Get-ChildItem D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html `
-Recurse -Include *.html.bkup | `
ForEach-Object { `
  Get-Content $_.FullName | `
  Out-File -Encoding UTF8 ($_.FullName -replace '.html.bkup','.html') `
}

Remove-Item D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html\*.bkup -Recurse