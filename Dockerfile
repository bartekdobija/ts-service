# Context of this docker should be the top "backend" directory

FROM node:12-slim

COPY ./ /tmp/service
RUN addgroup --system apiservice && adduser --system --shell /bin/false --ingroup apiservice apiservice \
    && mkdir -p /app \
    && cd /tmp/service && npm install && npm run build \
    && cp -R dist node_modules /app \
    && chown -R apiservice:apiservice /app \
    && rm -fR /tmp/service

USER apiservice

EXPOSE 8080

CMD node /app/dist/app.js