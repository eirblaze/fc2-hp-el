# utf8に置き換え

Get-ChildItem D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html `
-Recurse -Include *.css | `
Rename-Item -NewName {$_.FullName + ".bkup"}


Get-ChildItem D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html `
-Recurse -Include *.css.bkup | `
ForEach-Object { `
  Get-Content $_.FullName | `
  Out-File -Encoding UTF8 ($_.FullName -replace '.css.bkup','.css') `
}


Remove-Item D:\SDK\XAMPP\xampp\htdocs\WebHold\yahoo-e\html\**\*.bkup -Recurse


# あとからgitignore。プロジェクトルートから実行すること。
git rm --cached $(git ls-files --full-name -i --exclude-from=.gitignore)

