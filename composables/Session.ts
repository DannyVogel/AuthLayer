export const useSession = () => {
  const { loggedIn, user, session, fetch, clear } = useUserSession();

  return ref({
    loggedIn,
    user,
    session,
    fetch,
    clear,
  });
};
