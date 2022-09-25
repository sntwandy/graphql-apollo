/**
 *
 */

import "reflect-metadata";
import { startServer } from './app'

async function main() {
  const PORT = process.env.PORT || 3000
  const app = await startServer()
  app.listen(PORT)

  console.log(`Server on http://localhost:${PORT}/graphql`);
}

main()
