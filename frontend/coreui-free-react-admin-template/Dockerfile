# ใช้ Node.js เป็น base image
FROM node:20

# ตั้งค่า working directory
WORKDIR /app

# คัดลอก package.json และ package-lock.json ไปยัง working directory
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install --legacy-peer-deps

# คัดลอกไฟล์โปรเจคทั้งหมดไปยัง working directory
COPY . .

# สร้างโปรเจค
RUN npm run build

# ใช้ Nginx เป็น server เพื่อให้บริการ static files
FROM nginx:alpine

# คัดลอกไฟล์ build ที่สร้างจากขั้นตอนก่อนหน้าไปยัง Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# เปิดพอร์ต 80
EXPOSE 1626

# เริ่ม Nginx
CMD ["nginx", "-g", "daemon off;"]