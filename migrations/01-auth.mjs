export const name = 'auth'
export const description = `
  Create Initial DB Structure with Next Auth dependent tables
`

export async function action(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS verification_token (
      identifier TEXT NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      token TEXT NOT NULL,

      PRIMARY KEY (identifier, token)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS accounts (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      "providerAccountId" VARCHAR(255) NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at BIGINT,
      id_token TEXT,
      scope TEXT,
      session_state TEXT,
      token_type TEXT,
    
      PRIMARY KEY (id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      "sessionToken" VARCHAR(255) NOT NULL,

      PRIMARY KEY (id)
    );
  `

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL,
      name VARCHAR(255),
      email VARCHAR(255),
      "emailVerified" TIMESTAMPTZ,
      image TEXT,

      PRIMARY KEY (id)
    );
  `
}
