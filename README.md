# React Firebase Boilerplate

A modern, production-ready boilerplate for rapidly building React applications with Firebase authentication and real-time data management.

## 🚀 Tech Stack

- **React 19** with TypeScript for type safety
- **Vite** for blazing fast development and building
- **Firebase Auth** for authentication (Google OAuth)
- **TanStack React Query** for server state management
- **React Router v7** for client-side routing
- **Tailwind CSS v4** for modern styling
- **Shadcn UI** for beautiful, accessible components
- **Axios** for HTTP client
- **Sonner** for elegant toast notifications

## 📁 Project Structure

```
src/
├── api/                    # API layer - data fetching & mutations
├── components/            # Reusable UI components
├── hooks/                # Custom React hooks
├── pages/                # Page components
├── providers/            # React context providers
├── router/               # Routing configuration
└── lib/                  # Utility functions
```

> 💡 **Detailed Architecture**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive architecture documentation, design patterns, and development guidelines.

## ⭐ Key Features

- **🔐 Firebase Authentication** - Google OAuth integration with protected routes
- **📡 API Layer** - Clean separation with TanStack Query for server state
- **🎨 Modern UI** - Tailwind CSS v4 + Shadcn UI components
- **🌙 Dark Mode** - Built-in theme switching
- **📱 Responsive** - Mobile-first design approach
- **⚡ Fast Development** - Hot reloading with Vite
- **🔒 Type Safe** - Full TypeScript coverage
- **📊 Form Handling** - React Hook Form with Zod validation

## 🚀 Quick Start

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project (for authentication)

### 1. Clone and Install

```bash
git clone <your-repo>
cd react-firebase-boilerplate
npm install
```

### 2. Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Google Authentication in Firebase Auth
3. Create `.env.local` with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Update `src/api/firebase.ts` with your Firebase configuration

### 3. Start Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your app running!

## 📋 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🎯 Example Implementation

The boilerplate includes a **Personal Information Form** as a working example demonstrating:

- ✅ Form handling with react-hook-form + Zod validation
- ✅ API integration with TanStack Query
- ✅ Loading states and error handling
- ✅ Type-safe data flow from UI to API
- ✅ Responsive design patterns

This serves as a template for building your own forms and API integrations.

## 🛠️ Development Workflow

### Adding New Features

1. **API Endpoints** → Define in `src/api/api-paths.ts`
2. **Types** → Create request/response contracts in `src/api/contracts/`
3. **Service Methods** → Add to `src/api/api-service.ts`
4. **Hooks** → Create query/mutation hooks in `src/api/queries|mutations/`
5. **Components** → Build UI components in `src/components/`
6. **Pages** → Create page components in `src/pages/`
7. **Routes** → Configure routing in `src/router/`

> 📖 **Detailed Development Guide**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive development patterns and best practices.

### Adding UI Components

```bash
# Add Shadcn UI components
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

The boilerplate is ready for deployment to:

- **AWS** (S3 + CloudFront)
- **Azure** (Static Web Apps)
- **Netlify**
- **Firebase Hosting**
- **Any static hosting provider**

### Build Commands

```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

## 🔒 Security Notes

- 🔐 Keep Firebase config in environment variables
- 🛡️ Configure Firestore security rules for your data
- 🔑 Authentication guards are included for protected routes
- 🌐 Configure CORS for your API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with these amazing tools:

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Firebase](https://firebase.google.com/) - Authentication & Backend
- [TanStack Query](https://tanstack.com/query) - Server State Management
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Shadcn UI](https://ui.shadcn.com/) - UI Components

---

**📚 Need More Details?** Check out [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive documentation on architecture patterns, design decisions, and advanced development practices.
