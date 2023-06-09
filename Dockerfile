FROM nginx:1.13.6-alpine
LABEL maintainer="lilywang <lilywang.cd@gmail.com>"
 
ARG TZ="Asia/Shanghai"
 
ENV TZ ${TZ}
 
RUN apk upgrade --update \
    && apk add bash tzdata \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && rm -rf /var/cache/apk/*
 
COPY dist /usr/share/nginx/html 
 
CMD ["nginx", "-g", "daemon off;"]