
FROM node:latest as build


ARG REPO_URL=https://github.com/DataOnSistemas/dataon-customers.git
ARG ACCESS_TOKEN


WORKDIR /app


RUN apt-get update && apt-get install -y git


RUN git clone https://${ACCESS_TOKEN}:x-oauth-basic@github.com/DataOnSistemas/dataon-customers.git .


RUN npm install


RUN npm run build


FROM nginx:alpine


COPY --from=build /app/browsers /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]