# To reproduce [the issue](https://github.com/prisma/prisma-engines/issues/2110)

Make sure you've local psql running which `.env` is pointing at, then   
```sh
# bad
npm i
npx prisma generate
npx pkg package.json --debug --output bin/exe > log-pkg.log
env -i DEBUG_PKG=1 bin/exe
# good
npm start
```

**urls**: 
- [vercel/pkg](https://github.com/vercel/pkg#exploring-virtual-file-system-embedded-in-debug-mode)
- [prisma engine](https://www.prisma.io/docs/concepts/components/prisma-engines)
