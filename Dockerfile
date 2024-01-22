FROM node:20.11.0-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.24.0-alpine as run
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80