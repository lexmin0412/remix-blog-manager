---
title: git 清除远程 commit 记录
---

1.使用 git checkout --orphan new_branch ,基于当前分支创建一个独立的分支new_branch

git checkout --orphan  new_branch
2.添加所有文件变化至暂存空间

git add -A
3.提交并添加提交记录

git commit -am "commit message"
4.删除当前分支(谨慎，master分支不能轻易删除，我是自己的项目需要提交到远程仓库，脱敏)

git branch -D master
5.重新命名当前独立分支为 master

git branch -m master
6.强制推送到远端分支

git push -f origin master