import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn("linkedin")}>Sign in with LinkedIn</button>
    </div>
  );
}