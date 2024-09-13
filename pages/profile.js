import { getSession } from 'next-auth/react';

export default function Profile({ session }) {
  return (
    <div>
      {session ? (
        <p>Logged in as {session.user.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}