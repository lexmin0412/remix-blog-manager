const { spawnSync } = require('child_process');

export const syncCode = async(msg: string) => {
  await spawnSync("git", ["add", '.']);
  await spawnSync("git", ["commit", "-m", msg]);
  await spawnSync("git", ["pull"]);
  await spawnSync("git", ["push"]);
}