const { spawnSync } = require('child_process');

export const syncCode = (msg: string) => {
  spawnSync("git", ["add", '.']);
  spawnSync("git", ["commit", "-m", msg]);
  spawnSync("git", ["pull"]);
  spawnSync("git", ["push"]);
}