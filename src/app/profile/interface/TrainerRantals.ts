export interface Trainer {
  trainer_name: string; // เปลี่ยนเป็นชื่อที่ตรงกับฟิลด์ที่มี
}

export interface TrainerRantals {
  trainer: Trainer; // กำหนดประเภท Trainer ให้กับ trainer
  rental_id: number;
  user_id: number;
  trainer_id: number;
  rental_date: string; // ถ้าคุณจะใช้ Date ควรมั่นใจว่า data นี้มีประเภทที่ตรงกัน
  duration: number;
}
