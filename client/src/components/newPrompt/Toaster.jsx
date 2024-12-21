import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          duration: 3000,
          theme: {
            primary: '#4CAF50',
            secondary: '#FFFAEE',
          },
        },
        error: {
          duration: 4000,
          theme: {
            primary: '#E53E3E',
            secondary: '#FFFAEE',
          },
        },
      }}
    />
  );
}

