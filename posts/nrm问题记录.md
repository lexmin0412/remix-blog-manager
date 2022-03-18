---
title: nrm问题记录
---

# nrm 问题记录

windows 系统下安装 nrm 之后运行 nrm list 可能会出现如下的问题：

```shell
nrm : 无法加载文件 C:\Users\zhang\AppData\Roaming\npm\nrm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/
go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
```

解决方案：

在 powershell 中执行如下命令：

```shell
set-ExecutionPolicy RemoteSigned
```

会看到如下的选项：

```shell
执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
```

在用户选项中输入 y, 回车即可。

执行 `get-ExecutionPolicy`，输出结果为 `RemoteSigned` 即可。