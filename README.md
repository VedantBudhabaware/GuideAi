<div align="center">

<img src="https://raw.githubusercontent.com/jthapa01/meetai/main/public/logo.svg" alt="Meet AI Logo" width="120" height="120" />

# 🎯 Meet AI

### *Next-Generation AI-Powered Video Conferencing Platform*

**Transform your meetings with AI agents that see, hear, and understand.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![tRPC](https://img.shields.io/badge/tRPC-11-2596BE?style=for-the-badge&logo=trpc&logoColor=white)](https://trpc.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

<br />

**[🚀 Live Demo](https://meetai.vercel.app)** • 
**[📚 Documentation](#-table-of-contents)** • 
**[🐛 Report Bug](https://github.com/jthapa01/meetai/issues)** • 
**[✨ Request Feature](https://github.com/jthapa01/meetai/issues)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Development](#-development)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Meet AI** is a cutting-edge video conferencing platform that revolutionizes online meetings by integrating intelligent AI agents directly into your calls. Unlike traditional meeting tools, Meet AI provides:

- 🎙️ **Voice-Activated AI Agents** that join as virtual participants
- 📝 **Real-Time Transcription** with speaker identification
- 🧠 **Intelligent Summaries** automatically generated post-meeting
- 💬 **Interactive Q&A** to query meeting content using natural language
- 🔍 **Smart Search** across all transcripts with context highlighting
- 🎨 **Beautiful UI/UX** built with modern design principles

Perfect for remote teams, online education, customer support, and any scenario where AI-enhanced collaboration matters.

---

## ✨ Key Features

### 🎥 Advanced Video Conferencing

- **Real-Time HD Video Calls** - Crystal clear video quality powered by Stream Video SDK
- **AI Agents as Participants** - Virtual AI assistants join calls with audio and video presence
- **Live Chat & Threading** - In-meeting messaging with threaded conversations
- **Screen Sharing** - Share your screen with all participants
- **Call Recording** - Record meetings for later review and analysis

### 🤖 AI-Powered Intelligence

- **Voice-Enabled AI Agents** - AI agents that can speak and respond in real-time during calls
- **Automatic Transcription** - Real-time speech-to-text with speaker identification
- **AI-Generated Summaries** - Intelligent meeting summaries with key points and action items
- **Post-Meeting Q&A** - Chat with AI about meeting content using natural language
- **Smart Transcript Search** - Search across all transcripts with context highlighting and relevance ranking
- **Sentiment Analysis** - Understand meeting tone and participant engagement

### 💼 Flexible Subscription Management

- **Free Tier** - Get started with 5 AI agents and 20 meetings
- **Premium Plans** - Unlimited agents, meetings, and advanced features
- **Integrated Billing** - Secure payment processing via Polar
- **Self-Service Portal** - Manage subscriptions, view usage, and update payment methods
- **Usage Analytics** - Track your consumption and optimize your plan

### 🔐 Enterprise-Grade Security

- **Multi-Factor Authentication** - Email/password with optional 2FA
- **OAuth Integration** - Sign in with GitHub, Google, and more
- **Secure Session Management** - JWT-based authentication with Better Auth
- **Protected API Routes** - Type-safe API endpoints with tRPC
- **Role-Based Access Control** - Granular permissions for teams and organizations
- **Data Encryption** - End-to-end encryption for sensitive meeting data

### 📱 Modern User Experience

- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Command Palette** - Quick navigation with `Cmd+K` / `Ctrl+K`
- **Real-Time Updates** - Live data synchronization across all clients
- **Beautiful UI** - Modern design with Tailwind CSS v4 and shadcn/ui
- **Dark Mode** - Eye-friendly interface for any lighting condition
- **Keyboard Shortcuts** - Power-user features for efficient navigation

## 🎬 Demo

> **Note:** Add screenshots or video demo here once deployed

```bash
# Quick preview of the platform
1. Sign up / Sign in with GitHub or Google
2. Create your first AI agent with custom personality
3. Start a new meeting and invite the agent
4. Experience real-time AI interaction during the call
5. Review auto-generated transcripts and summaries
```

---

## 🛠️ Tech Stack

### Frontend Architecture

| Technology | Version | Purpose |
|------------|---------|----------|
| **Next.js** | 15.1 | React framework with App Router for server and client components |
| **React** | 19 | Modern UI library with concurrent features |
| **TypeScript** | 5.7 | Type safety and enhanced developer experience |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework for rapid styling |
| **shadcn/ui** | Latest | High-quality, accessible component library |
| **tRPC** | 11 | End-to-end typesafe APIs without code generation |
| **Zod** | 3.x | Runtime type validation and schema declaration |
| **React Hook Form** | 7.x | Performant form management with validation |
| **TanStack Query** | 5.x | Powerful data synchronization for React (via tRPC) |

### Backend Infrastructure

| Technology | Version | Purpose |
|------------|---------|----------|
| **PostgreSQL** | 16 | Robust relational database (hosted on Neon) |
| **Drizzle ORM** | Latest | TypeScript ORM with SQL-like syntax |
| **Better Auth** | Latest | Modern authentication library with OAuth support |
| **Inngest** | Latest | Durable workflow engine for background jobs |
| **OpenAI API** | GPT-4o | AI language model for transcription and analysis |
| **Stream SDK** | Latest | Real-time video, audio, and chat infrastructure |

### Development & DevOps

| Technology | Purpose |
|------------|----------|
| **Vercel** | Hosting platform optimized for Next.js |
| **Neon** | Serverless PostgreSQL with autoscaling |
| **Polar** | Subscription billing and payment processing |
| **ngrok** | Secure tunneling for webhook development |
| **ESLint** | Code linting and style enforcement |
| **Prettier** | Code formatting automation |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Next.js    │  │  React 19    │  │  Tailwind    │    │
│  │  App Router  │  │  Components  │  │  + shadcn/ui │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Layer (tRPC)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Agents     │  │   Meetings   │  │   Premium    │    │
│  │   Router     │  │   Router     │  │   Router     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     Business Logic Layer                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  Better Auth │  │ Drizzle ORM  │  │   Inngest    │    │
│  │  (Sessions)  │  │  (Database)  │  │  (Workflows) │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data & Services Layer                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  PostgreSQL  │  │  Stream SDK  │  │  OpenAI API  │    │
│  │    (Neon)    │  │ (Video/Chat) │  │   (GPT-4o)   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow

1. **Client Request** → User interacts with React components
2. **tRPC Call** → Type-safe API call to Next.js API route
3. **Authentication** → Better Auth validates session
4. **Authorization** → Middleware checks permissions and usage limits
5. **Business Logic** → Procedure executes with validated input
6. **Database Query** → Drizzle ORM fetches/updates PostgreSQL
7. **External APIs** → Calls to Stream, OpenAI, or Polar as needed
8. **Response** → Type-safe data returned to client
9. **UI Update** → React re-renders with new data

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following:

#### Required Software

- **Node.js** 18.17 or higher ([Download](https://nodejs.org/))
- **npm** 9+ or **pnpm** 8+ (comes with Node.js)
- **Git** for version control ([Download](https://git-scm.com/))

#### Required Accounts

- **Neon** - Serverless PostgreSQL database ([Sign up](https://neon.tech/))
- **Stream** - Video and chat infrastructure ([Sign up](https://getstream.io/))
- **OpenAI** - GPT-4o API access ([Sign up](https://platform.openai.com/))
- **Better Auth** - Configure OAuth providers (GitHub, Google)
- **Polar** - Payment processing ([Sign up](https://polar.sh/))
- **ngrok** - Webhook tunneling with static domain ([Sign up](https://ngrok.com/))
- **Inngest** - Background job processing ([Sign up](https://inngest.com/))

### 📦 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/jthapa01/meetai.git
cd meetai
```

#### 2. Install Dependencies

```bash
# Using npm (React 19 requires legacy peer deps flag)
npm install --legacy-peer-deps

# Or using pnpm
pnpm install
```

#### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

See the [Environment Variables](#-environment-variables) section for detailed configuration.

#### 4. Set Up Database

```bash
# Push the schema to your database
npm run db:push

# (Optional) Open Drizzle Studio to inspect your database
npm run db:studio
```

#### 5. Configure ngrok

Update your `package.json` with your ngrok static domain:

```json
{
  "scripts": {
    "dev:webhook": "ngrok http --url=YOUR_STATIC_DOMAIN.ngrok-free.app 3000"
  }
}
```

---

## 🔧 Configuration

### Database Configuration

1. **Create a Neon Database**
   - Sign up at [neon.tech](https://neon.tech/)
   - Create a new project
   - Copy the connection string

2. **Update Environment Variables**
   ```env
   DATABASE_URL=postgresql://user:password@host/database?sslmode=require
   ```

### Stream Video & Chat Setup

1. **Create Stream Account**
   - Go to [getstream.io](https://getstream.io/)
   - Create a new app
   - Get your API key and secret

2. **Configure Environment**
   ```env
   NEXT_PUBLIC_STREAM_API_KEY=your_api_key
   STREAM_API_SECRET=your_api_secret
   ```

### OpenAI Configuration

1. **Get API Key**
   - Visit [platform.openai.com](https://platform.openai.com/)
   - Generate an API key with GPT-4o access

2. **Set Environment Variable**
   ```env
   OPENAI_API_KEY=sk-...
   ```

### Better Auth & OAuth

1. **GitHub OAuth**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Create new OAuth app
   - Set callback URL: `http://localhost:3000/api/auth/callback/github`

2. **Google OAuth**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 credentials
   - Set authorized redirect URI

3. **Configure Environment**
   ```env
   BETTER_AUTH_SECRET=your_secret_key_min_32_chars
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

### Polar Payment Setup

1. **Create Polar Account**
   - Sign up at [polar.sh](https://polar.sh/)
   - Create products (subscription plans)
   - **Important:** Mark products as "Recurring" (not one-time)

2. **Configure Webhooks**
   - Add your ngrok URL: `https://YOUR_DOMAIN.ngrok-free.app/api/webhook/polar`
   - Enable required events: `subscription.created`, `subscription.updated`, etc.

3. **Set Environment Variables**
   ```env
   POLAR_ACCESS_TOKEN=polar_...
   POLAR_WEBHOOK_SECRET=whsec_...
   ```

---

## 💻 Development

### Running the Development Environment

You need to run **three processes** simultaneously for full functionality:

#### Terminal 1: Next.js Development Server

```bash
npm run dev
```

This starts the Next.js app at [http://localhost:3000](http://localhost:3000)

#### Terminal 2: Webhook Tunnel (ngrok)

```bash
npm run dev:webhook
```

This creates a secure tunnel for webhook events from Polar and other services.

#### Terminal 3: Inngest Development Server

```bash
npx inngest-cli@latest dev
```

This runs the background job processor at [http://localhost:8288](http://localhost:8288)

### Development Workflow

1. **Make Code Changes** - Edit files in `src/`
2. **Hot Reload** - Next.js automatically reloads
3. **Test Webhooks** - Use ngrok URL for external services
4. **Check Jobs** - Monitor Inngest dashboard for background tasks
5. **Inspect Database** - Use `npm run db:studio` to view data

### 🧪 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server on port 3000 |
| `npm run dev:webhook` | Start ngrok tunnel for webhook testing |
| `npx inngest-cli dev` | Start Inngest dev server for background jobs |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run type-check` | Run TypeScript compiler checks |
| `npm run db:push` | Push schema changes to database |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |
| `npm run db:generate` | Generate migration files |
| `npm run db:migrate` | Run pending migrations |

### 🐛 Debugging Tips

- **Database Issues**: Check your `DATABASE_URL` and ensure Neon project is active
- **Webhook Failures**: Verify ngrok is running and URL is updated in Polar dashboard
- **Build Errors**: Clear `.next` folder and run `npm run build` again
- **Type Errors**: Run `npm run type-check` to see all TypeScript issues
- **API Errors**: Check tRPC router logs in the terminal

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

#### 1. Prepare for Production

```bash
# Test production build locally
npm run build
npm run start
```

#### 2. Deploy to Vercel

**Option A: Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel
```

**Option B: Using GitHub Integration**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Click "Import Project"
4. Select your repository
5. Configure environment variables
6. Deploy!

#### 3. Configure Production Environment

In Vercel dashboard, add all environment variables:

- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `NEXT_PUBLIC_STREAM_API_KEY`
- `STREAM_API_SECRET`
- `OPENAI_API_KEY`
- `POLAR_ACCESS_TOKEN`
- `POLAR_WEBHOOK_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

#### 4. Update Webhook URLs

Replace ngrok URLs with your Vercel domain:

- **Polar**: `https://your-app.vercel.app/api/webhook/polar`
- **OAuth Callbacks**: `https://your-app.vercel.app/api/auth/callback/*`

#### 5. Verify Deployment

- ✅ Check build logs in Vercel dashboard
- ✅ Test authentication flow
- ✅ Verify webhook endpoints
- ✅ Create test meeting with AI agent
- ✅ Check database connections

### Other Deployment Options

<details>
<summary><b>Deploy on Railway</b></summary>

1. Connect your GitHub repository
2. Add environment variables
3. Railway auto-detects Next.js
4. Deploy!

</details>

<details>
<summary><b>Deploy with Docker</b></summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t meetai .
docker run -p 3000:3000 --env-file .env meetai
```

</details>

---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| `BETTER_AUTH_SECRET` | Secret key for session encryption (min 32 chars) | `your-secret-key-min-32-characters` |
| `NEXT_PUBLIC_STREAM_API_KEY` | Stream API public key | `abc123...` |
| `STREAM_API_SECRET` | Stream API secret key | `secret_abc123...` |
| `OPENAI_API_KEY` | OpenAI API key for GPT-4o | `sk-...` |
| `POLAR_ACCESS_TOKEN` | Polar API access token | `polar_...` |
| `POLAR_WEBHOOK_SECRET` | Polar webhook signing secret | `whsec_...` |

### OAuth Variables (Optional but Recommended)

| Variable | Description |
|----------|-------------|
| `GITHUB_CLIENT_ID` | GitHub OAuth app client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth app secret |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

### Development Variables

| Variable | Description | Default |
|----------|-------------|----------|
| `NEXT_PUBLIC_APP_URL` | Your application URL | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` |

### Example .env.local

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/meetai

# Auth
BETTER_AUTH_SECRET=your-secret-key-that-is-at-least-32-characters-long
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stream
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_secret

# OpenAI
OPENAI_API_KEY=sk-your-openai-api-key

# Polar
POLAR_ACCESS_TOKEN=polar_at_your_access_token
POLAR_WEBHOOK_SECRET=whsec_your_webhook_secret

# OAuth (Optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   gh repo fork jthapa01/meetai
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Describe your changes
   - Submit the PR!

### Development Guidelines

- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Add comments for complex logic
- ✅ Test your changes thoroughly
- ✅ Update documentation as needed
- ✅ Keep PRs focused on a single feature/fix

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

✅ Commercial use  
✅ Modification  
✅ Distribution  
✅ Private use  

⚠️ Liability  
⚠️ Warranty  

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Stream](https://getstream.io/) - Real-time video and chat
- [OpenAI](https://openai.com/) - GPT-4o language model
- [Better Auth](https://better-auth.com/) - Modern authentication
- [Polar](https://polar.sh/) - Subscription billing
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Vercel](https://vercel.com/) - Hosting platform
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

## 📞 Support

- 📧 **Email**: support@meetai.app
- 💬 **Discord**: [Join our community](https://discord.gg/meetai)
- 🐦 **Twitter**: [@meetai_app](https://twitter.com/meetai_app)
- 📖 **Documentation**: [docs.meetai.app](https://docs.meetai.app)

---

<div align="center">

**Built with ❤️ by [Jeeven Thapa](https://github.com/jthapa01)**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/jthapa01/meetai/issues) • [Request Feature](https://github.com/jthapa01/meetai/issues) • [Discussions](https://github.com/jthapa01/meetai/discussions)

</div>
