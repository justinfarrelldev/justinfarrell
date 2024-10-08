# Justin Farrell's Personal Site

This is the source code for my personal site hosted at [justin-farrell.com](https://www.justin-farrell.com/)!

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### Hosting

If you are going to fork this code, I highly recommend hosting it on Fly.io. I originally hosted this project on Vercel, but eventually chose to go with Fly.io due to issues with Vercel functions and long-running requests with the LLM.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

-   `build/server`
-   `build/client`
