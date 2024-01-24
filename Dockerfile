FROM node:20.11.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build

FROM nginx:1.24.0-alpine as run
COPY --from=build /app/build /usr/share/nginx/html
WORKDIR /etc/nginx/conf.d
COPY nginx/nginx.conf .
CMD mv nginx.conf nginx.conf.template && \
    envsubst < nginx.conf.template > nginx.conf && \
    rm nginx.conf.template default.conf && \
    nginx -g "daemon off;"
EXPOSE 80