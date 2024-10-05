# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)


Things to remember:-
1. money shouldnt transfer 2 times by fast clicking withdraw button. - queue or something which pass one trsxn at a time
2. webhook need to add money once shouldnt add money twice in 2 request. - need a token or something that turns true or expires
3. sending money to someone should debit and credit only once - transactions need to be used
4. cors need to allow only bank server to make request to avoid hacker add funds.
5. if bank offline, need to send request again in continous interval.
6. scale it for handling multiple requests.
7. ratelimiting
8. // add kafka to webhook and BE subscribe to queue
https://dev.to/manjufy/rest-api-how-to-avoid-duplicate-resource-creation-on-concurrent-requests-o23 - avoid dublicate resource creation.
9. share password between webhook and hdfc so that no one else can make similar req to webhook.
10. if pending for 2 hous make it failed in onramping ------> ?
11. elastic search to recommmend user userid/phone numb while p2p
12. Bun compiler run very fast then v8 for node/ run test very fast
13. Add locks even after trsxn not safe/ multiple request comes. use locking of rows to prevent this.

Commands:
1. npx create-turbo@latest
2. add tailwind from tailwind doc - npm install -D tailwindcss / npx init tailwindcss -p
3. 