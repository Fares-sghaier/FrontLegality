// pages/expired_reset_password.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ExpiredResetPasswordPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Rediriger vers la page de demande de réinitialisation du mot de passe après quelques secondes
    const redirectTimer = setTimeout(() => {
      router.push('https://front-legality.vercel.app/signin');
    }, 5000); // Rediriger après 5 secondes

    // Nettoyer le timer lors du démontage du composant
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <h1>Expired Token</h1>
      <p>Your activation account token has expired.</p>
      <p>Redirecting to login page...</p>
    </div>
  );
};

export default ExpiredResetPasswordPage;
