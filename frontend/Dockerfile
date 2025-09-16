FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && pnpm i --frozen-lockfile
COPY . .
# IMPORTANT: make your Apollo Client use a relative URL: uri: '/graphql'
# so no domain juggling is needed.
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Optional: SPA fallback (uncomment and add a custom config if you need it)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
