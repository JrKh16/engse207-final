# ใช้ Node.js เป็น base image
FROM node:20

# ตั้งค่า working directory
WORKDIR /app

# คัดลอก package.json และ package-lock.json ไปยัง working directory
COPY package*.json ./

# คัดลอกไฟล์โปรเจคทั้งหมดไปยัง working directory
COPY . .
COPY ./server.key ./server.crt ./

EXPOSE 8605 8606

# เริ่ม Nginx
CMD ["node", "api-wallboard-https"]