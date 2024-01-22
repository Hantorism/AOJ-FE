FROM node:20.11.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.24.0-alpine as run
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80