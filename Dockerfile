# Context of this docker should be the top "backend" directory
FROM node:14-alpine3.14 as builder

COPY ./ /build/
RUN mkdir /app \
    && cd /build \
    && npm install \
    && npm run build \
    && npm prune --production \
    && ls -al /build

FROM node:14-alpine3.14

COPY --from=builder /build/dist /app/dist
COPY --from=builder /build/node_modules /app/node_modules

# Add user so we don't need --no-sandbox.
RUN addgroup --system apiservice \
    && adduser --system --shell /bin/false --ingroup apiservice apiservice \
    && mkdir -p /home/apiservice/Downloads \
    && chown -R apiservice:apiservice /home/apiservice \
   	&& chown -R apiservice:apiservice /app

USER apiservice

EXPOSE 8080

CMD [ "node", "/app/dist/app.js" ]