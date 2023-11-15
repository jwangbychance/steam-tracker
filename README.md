# Steam Tracker

This is a [Next.js](https://nextjs.org/) project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies Used

- [Next.js](https://nextjs.org/) - The React framework for building modern web applications.
- [React](https://react.dev/) - A JavaScript library for building user interfaces.

## Environment Variables

The project requires a

## Getting Started

Clone the repository:

```script
git clone https://github.com/jwangbychance/steam-tracker.git
```

Once the repository has been cloned, create a `.env` variable file using the `.env.example` provided as a template.

The project relies on the following environment variable for configuration:

- `STEAM_WEB_API`: This variable represents the Steam Web API key for authentication and access to the Steam API services. To use certain features of the application, you need to obtain a Steam Web API key from the [Steam Developer Console](https://steamcommunity.com/dev/apikey).

## Installation

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js Github repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Todos

- Update website design
- Use a better layout for cards
- Add user search history
- More features to come... &#x1f914;
