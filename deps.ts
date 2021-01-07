const { open, remove, truncate, readDir, readFile, stat, writeFile, close, mkdir } = Deno
export { join } from 'https://deno.land/std@0.83.0/path/mod.ts'
export {
  open,
  remove as unlink,
  truncate as ftruncate,
  readDir,
  readFile,
  stat,
  writeFile,
  close,
  mkdir,
  remove as rmdir
}
