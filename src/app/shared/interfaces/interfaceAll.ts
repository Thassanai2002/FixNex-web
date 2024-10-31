export interface StateDataInterface<T> {
  data?: T; //อยากส่งอะไรไปหน้าต่อไปใส้ในนี้ น่ะจ่ะ
  user?: T; //เก็บค่า user เช่น user_name user_id น่ะจ่ะ
  header?: T;
}

// จะเพิ่ม interface ได้เลย แต่ห้ามแก้หรือลบ เด็ดขาด
