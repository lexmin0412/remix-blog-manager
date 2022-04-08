---
title: css文本溢出隐藏
---

## 单行文本溢出隐藏并显示省略号

```css
div {
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow:ellipsis;
}
```

## 多行文本溢出隐藏并显示省略号

```css
div {
  overflow:hidden;
  text-overflow:ellipsis; 
  word-break:break-all;
  -webkit-box-orient:vertical;   //子元素应该被水平或垂直排列
  -webkit-line-clamp:3;
}
```

