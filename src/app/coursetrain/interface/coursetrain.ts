export interface Coursetrain {
  program_id: number;
  program_name: string;
  goal: string;
  descriptiom: string;
  vip_required: number;
  duration: number;
  day: string;
}

export interface programsEnrollments {
  user_id: number;
  program_id: number;
  enrollment_date: string;
}
