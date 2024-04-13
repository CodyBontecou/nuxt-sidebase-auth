import postgres from 'postgres'

const sql = postgres({
  database: 'nuxt-sidebase-auth',
  transform: {
    undefined: null,
  },
})

export default sql
