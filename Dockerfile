FROM node:20.11.0-alpine as build
WORKDIR /app
COPY . .
RUN npm clean-install && \
    npm run build

FROM nginx:1.24.0-alpine as run
COPY --from=build /app/build /usr/share/nginx/html
WORKDIR /etc/nginx
COPY ../nginx/nginx.conf templates/nginx.conf.template
CMD envsubst < templates/nginx.conf.template > conf.d/nginx.conf && \
    rm conf.d/default.conf && \
    nginx -g "daemon off;"
EXPOSE 80
