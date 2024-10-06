const { githubRedirectURL } = useRuntimeConfig();

export default defineOAuthGitHubEventHandler({
  config: {
    redirectURL: githubRedirectURL || undefined,
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, { user, loggedInAt: new Date() });
    return sendRedirect(event, "/");
  },
});
