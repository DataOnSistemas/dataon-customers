
FROM node:20 as build


ARG REPO_URL=https://github.com/DataOnSistemas/dataon-customers.git
ARG ACCESS_TOKEN


WORKDIR /app


RUN apt-get update && apt-get install -y git


RUN git clone https://${ACCESS_TOKEN}:x-oauth-basic@github.com/DataOnSistemas/dataon-customers.git .


RUN npm install


RUN npm run build


FROM nginx:alpine


COPY --from=build /app/dist/dataon-customers/browser /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]