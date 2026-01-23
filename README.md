# 🎯 Meet AI

### Next-Generation AI-Powered Video Conferencing Platform

Transform your meetings with AI agents that see, hear, and understand.

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

Meet AI is a cutting-edge video conferencing platform that revolutionizes online meetings by integrating intelligent AI agents directly into your calls. Unlike traditional meeting tools, Meet AI provides:

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

---

## 🎬 Demo

![App Screenshot](https://github.com/VedantBudhabaware/GuideAi/blob/main/public/screenshot/Photo5.png)
![App Screenshot](https://github.com/VedantBudhabaware/GuideAi/blob/main/public/screenshot/Photo1.png)
![App Screenshot](https://github.com/VedantBudhabaware/GuideAi/blob/main/public/screenshot/Photo2.png)
![App Screenshot](https://github.com/VedantBudhabaware/GuideAi/blob/main/public/screenshot/Photo3.png)
![App Screenshot](https://github.com/VedantBudhabaware/GuideAi/blob/main/public/screenshot/Photo4.png)

```
Quick preview of the platform:
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
|------------|---------|---------|
| **Next.js** | 16.1 | React framework with App Router for server and client components |
| **React** | 19 | Modern UI library with concurrent features |
| **TypeScript** | 5.7 | Type safety and enhanced developer experience |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework for rapid styling |
| **shadcn/ui** | Latest | High-quality, accessible component library |
| **tRPC** | 11 | End-to-end typesafe APIs without code generation |
| **Zod** | 3.x | Runtime type validation and schema declaration |
| **React Hook Form** | 7.x | Performant form management with validation |
| **TanStack Query** | 5.x | Powerful data synchronization for React (via tRPC) |

### Backend Infrastructure

| Technology | Purpose |
|------------|---------|
| **PostgreSQL** | Robust relational database (hosted on Neon) |
| **Drizzle ORM** | TypeScript ORM with SQL-like syntax |
| **Better Auth** | Modern authentication library with OAuth support |
| **Inngest** | Durable workflow engine for background jobs |
| **OpenAI API** | GPT-4o for transcription and analysis |
| **Stream SDK** | Real-time video, audio, and chat infrastructure |

### Development & DevOps

| Tool | Purpose |
|------|---------|
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

---

## 🚀 Getting Started

### 📋 Prerequisites

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
   ```
   DATABASE_URL=postgresql://user:password@host/database?sslmode=require
   ```

### Stream Video & Chat Setup

1. **Create Stream Account**
   - Go to [getstream.io](https://getstream.io/)
   - Create a new app
   - Get your API key and secret

2. **Configure Environment**
   ```
   NEXT_PUBLIC_STREAM_API_KEY=your_api_key
   STREAM_API_SECRET=your_api_secret
   ```

### OpenAI Configuration

1. **Get API Key**
   - Visit [platform.openai.com](https://platform.openai.com/)
   - Generate an API key with GPT-4o access

2. **Set Environment Variable**
   ```
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
   ```
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
   ```
   POLAR_ACCESS_TOKEN=polar_...
   POLAR_WEBHOOK_SECRET=whsec_...
   ```

---

## 💻 Development

### Running the Development Environment

You need to run three processes simultaneously for full functionality:

#### Terminal 1: Next.js Development Server
```bash
npm run dev
```
This starts the Next.js app at [http://localhost:3000](http://localhost:3000/)

#### Terminal 2: Webhook Tunnel (ngrok)
```bash
npm run dev:webhook
```
This creates a secure tunnel for webhook events from Polar and other services.

#### Terminal 3: Inngest Development Server
```bash
npx inngest-cli@latest dev
```
This runs the background job processor at [http://localhost:8288](http://localhost:8288/)

### Development Workflow

1. **Make Code Changes** - Edit files in `src/`
2. **Hot Reload** - Next.js automatically reloads
3. **Test Webhooks** - Use ngrok URL for external services
4. **Check Jobs** - Monitor Inngest dashboard for background tasks
5. **Inspect Database** - Use `npm run db:studio` to view data

### 🧪 Available Commands

| Command | Purpose |
|---------|---------|
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

- **Database Issues:** Check your `DATABASE_URL` and ensure Neon project is active
- **Webhook Failures:** Verify ngrok is running and URL is updated in Polar dashboard
- **Build Errors:** Clear `.next` folder and run `npm run build` again
- **Type Errors:** Run `npm run type-check` to see all TypeScript issues
- **API Errors:** Check tRPC router logs in the terminal

---


---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| `BETTER_AUTH_SECRET` | Secret key for session encryption (min 32 chars) | `your-secret-key-min-32-characters` |
| `NEXT_PUBLIC_STREAM_API_KEY` | Stream API public key | `abc123...` |
| `STREAM_API_SECRET` | Stream API secret key | `secret_abc123...` |
| `OPENAI_API_KEY` | OpenAI API key for GPT-4o | `sk-...` |
| `POLAR_ACCESS_TOKEN` | Polar API access token | `polar_...` |


### OAuth Variables (Optional but Recommended)

| Variable | Description |
|----------|-------------|
| `GITHUB_CLIENT_ID` | GitHub OAuth app client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth app secret |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

### Development Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_URL` | Your application URL | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` |

### Example .env.local

```bash
# Database
   DATABASE_URL=your_neon_database_url

   # Authentication
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000

   # OpenAI
   OPENAI_API_KEY=your_openai_key

   # Stream.io
   NEXT_PUBLIC_STREAM_KEY=your_stream_key
   STREAM_SECRET=your_stream_secret

   # Polar
   POLAR_API_KEY=your_polar_key

   # Inngest
   INNGEST_EVENT_KEY=your_inngest_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # OAuth (Optional)
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### Development Guidelines

- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Add comments for complex logic
- ✅ Test your changes thoroughly
- ✅ Update documentation as needed
- ✅ Keep PRs focused on a single feature/fix

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
