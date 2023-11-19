# Steam Tracker

This is a [Next.js](https://nextjs.org/) project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Steam Tracker is a web application that leverages the Steam Web API to provide users with the ability to search for Steam users on the Steam Game Platform and track various aspects of their gaming activities. The application allows users to explore a Steam user's recently played games, achievements, and relevant game news.

![image](https://github.com/jwangbychance/steam-tracker/assets/99638105/c998eabf-b05f-4961-9f38-32a45ef9b7d3)

## Features

### 1. User Search

Easily search for Steam users by their Steam ID.

### 2. Recently Played Games

View a list of games that the selected user has recently played, including playtime and game details.

### 3. Achievement Tracking

Explore the achievements unlocked by the user across different games.

### 4. Game News Feed

Stay updated with the latest news and updates related to the games the user has played.

## Technologies Used

- [Next.js](https://nextjs.org/) - The React framework for building modern web applications.
- [React](https://react.dev/) - A JavaScript library for building user interfaces.

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
