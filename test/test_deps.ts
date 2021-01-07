export { faker } from 'https://deno.land/x/deno_faker@v1.0.2/mod.ts'
export { assertEquals } from 'https://deno.land/std@0.83.0/testing/asserts.ts'
import __ from 'https://deno.land/x/dirname@1.1.2/mod.ts'
export const { __filename, __dirname } = __(import.meta)
export const { test } = Deno
