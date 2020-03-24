const { open, remove, truncate, readdir, readFile, stat, writeFile, close, mkdir } = Deno
export { join } from 'https://deno.land/std@v0.36.0/path/mod.ts'
export {
  open,
  remove as unlink,
  truncate as ftruncate,
  readdir,
  readFile,
  stat,
  writeFile,
  close,
  mkdir,
  remove as rmdir
}
