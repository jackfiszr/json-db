export { faker } from 'https://raw.githubusercontent.com/jackfiszr/faker/master/mod.ts'
export { assertEquals } from 'https://deno.land/std@v0.38.0/testing/asserts.ts'
import { __ } from 'https://deno.land/x/dirname/mod.ts'
export const { __filename, __dirname } = __(import.meta)
export const { test } = Deno
