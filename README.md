# Exercise: Writing a fastify plugin that acts as a middleware

This repository shows how a fastify plugin can be used as a middleware
without the need for additional dependencies.

## Notes

`fastify-plugin` is used to avoid the new scope for fastify that happens
by default. While it is not strictly needed, it is recommended by
Fastify for the highest liklihood of compatibility with future versions.
