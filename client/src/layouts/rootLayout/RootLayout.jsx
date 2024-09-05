import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main_content from './Main_content';
import HomePage from './../../routes/homepage/Homepage.jsx';
import DashboardPage from "@/routes/dashboardPage/DashboardPage";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootLayout flex flex-col min-h-screen">
          <header>
            <Link to="/" className="logo">
              <img src="/logo_app.png" alt="logo" />
              <span>Gimini AI</span>
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </div>
          </header>
           <main className="flex-grow overflow-auto">
            <Outlet/>
           </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
