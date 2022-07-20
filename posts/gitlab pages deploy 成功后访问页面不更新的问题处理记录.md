---
title: gitlab pages deploy 成功后访问页面不更新的问题处理记录
---

```yaml
pages:
  stage: deploy
  image: node:14.15.0
  script:
    - pnpm i
    - pnpm build
    - mkdir .public
    - cp -r build/* .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - master
```