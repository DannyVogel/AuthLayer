export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user, loggedInAt: new Date() });
    return sendRedirect(event, "/");
  },
});
