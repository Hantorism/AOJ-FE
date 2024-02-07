FROM node:20.11.0-alpine as build
WORKDIR /workspace
COPY . .
RUN npm clean-install && \
    npm run build

FROM nginx:1.24.0-alpine as run
COPY --from=build /workspace/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/templates/default.conf.template
CMD /docker-entrypoint.d/20-envsubst-on-templates.sh && \
    nginx -g "daemon off;"
EXPOSE 80
