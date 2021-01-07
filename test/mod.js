// require('chai').use(require('chai-as-promised')).should()
import { join } from '../deps.ts'
import { __dirname, faker, test, assertEquals } from './test_deps.ts'

import { create, read, update, list, destroy, destroyTable } from '../mod.js'

const baseDir = join(__dirname, '.data')

test({
  name: 'create() can create items',
  fn: async () => {
    let errors = 0
    for (let t = 0; t < 10; t++) {
      for (let i = 0; i < 10; i++) {
        let jsonData = {
          users: [
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() },
            { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress() }
          ]
        }
        await create(baseDir, `${t}`, `${i}`, jsonData).catch((e) => {
          console.error(e)
          errors++
        })
        assertEquals(errors, 0)
      }
    }
  }
})
/*
test('read', () => {
  it('can read items', async () => {
    let errors = 0
    for (let t = 0; t < 10; t++) {
      for (let i = 0; i < 10; i++) {
        let data = await read(baseDir, `${t}`, `${i}`).catch((e) => {
          console.error(e)
          errors++
        })

        if (typeof data !== 'object') {
          errors++
        }
        errors.should.be.equal(0)
      }
    }
  })
})

test('update', () => {
  it('can update item', async () => {
    let errors = 0
    let data = await read(baseDir, '5', '6').catch((e) => {
      console.error(e)
      errors++
    })

    data.users[2].name = 'Changed'
    await update(baseDir, '5', '6', data).catch((e) => {
      console.error(e)
      errors++
    })

    data = await read(baseDir, '5', '6').catch((e) => {
      console.error(e)
      errors++
    })
    data.users[2].name.should.be.equal('Changed')
    errors.should.be.equal(0)
  })
})

test('delete', () => {
  it('can delete item', async () => {
    let errors = 0
    let msg = ''
    await destroy(baseDir, '9', '1').catch((e) => {
      console.error(e)
      errors++
    })

    await read(baseDir, '9', '1').catch((e) =>  msg = e)
    errors.should.be.equal(0)
    msg.should.be.equal('No such item or table.')
  })
})

test('list', () => {
  it('can list items', async () => {
    let errors = 0
    const lst = await list(baseDir, '9').catch((e) =>  {
      console.error(e)
      errors++
    })
    errors.should.be.equal(0)
    lst.length.should.be.equal(9)
  })
})

test('delete table', () => {
  it('can delete table', async () => {
    let errors = 0
    for (let i = 0; i < 10; i++) {
      await destroyTable(baseDir, `${i}`)
      const lst = await list(baseDir, `${i}`)
      if (lst.length !== 0) {
        errors++
      }
      errors.should.be.equal(0)
    }
  })
})
*/
