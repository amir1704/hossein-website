export default defineEventHandler(async (event) => {
    // Get the runtime configuration
    const config = useRuntimeConfig(event);

    try {
        // Securely fetch the token on the server
        const data = await $fetch(`${config.public.wpUri}/wp-json/jwt-auth/v1/token`, {
            method: 'POST',
            body: {
                username: config.wpUsername, // Server-only variable
                password: config.wpPassword, // Server-only variable
            },
        });

        // Return the token to the client
        return {
            token: data.token,
        };
    } catch (error) {
        // Handle errors, for example, by throwing an HTTP error
        throw createError({
            statusCode: 401,
            statusMessage: 'Authentication failed',
        });
    }
});