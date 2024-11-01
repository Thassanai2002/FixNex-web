import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;

  constructor() {}

  // ฟังก์ชันสำหรับเก็บ user_id
  setUserId(id: number): void {
    this.userId = id;
  }

  // ฟังก์ชันสำหรับเรียกใช้ user_id
  getUserId(): number | null {
    return this.userId;
  }

  // ฟังก์ชันสำหรับลบ user_id เมื่อต้องการออกจากระบบ
  clearUserId(): void {
    this.userId = null;
  }
}
