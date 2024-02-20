FROM node:20.11.0-alpine as dev
ENV REACT_APP_API_URL="http://125.6.44.225:8080/api/"
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm clean-install
COPY . .
CMD npm start
EXPOSE 3000

FROM node:20.11.0-alpine as build
ENV REACT_APP_API_URL="/api/"
WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm clean-install
COPY . .
RUN npm run build

FROM nginx:1.24.0-alpine as prod
COPY --from=build /workspace/build /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/templates/default.conf.template
CMD /docker-entrypoint.d/20-envsubst-on-templates.sh && \
    nginx -g "daemon off;"
EXPOSE 80
