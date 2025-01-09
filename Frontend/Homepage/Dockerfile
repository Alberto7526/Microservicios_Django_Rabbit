FROM node:alpine

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npx tailwindcss -i ./src/input.css -o ./src/output.css

# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]