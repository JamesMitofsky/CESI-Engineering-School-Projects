# Use node:18-alpine as the base image for all stages
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
# libc6-compat might be needed for certain Node.js features : https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine 
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Final stage: Setup the production environment
FROM base AS runner
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security purposes
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set permissions for prerender cache
RUN mkdir .next && chown nextjs:nodejs .next

# Use the non-root user
USER nextjs

# Expose port 3000 and set necessary environment variables
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]