FROM node:20.11.0-alpine as build
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm clean-install
COPY . .
RUN npm run build

FROM nginx:1.24.0-alpine as run
COPY --from=build /workspace/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/templates/nginx.conf.template
CMD /docker-entrypoint.d/20-envsubst-on-templates.sh && \
    mv /etc/nginx/conf.d/nginx.conf /etc/nginx && \
    nginx -g "daemon off;"
EXPOSE 80
