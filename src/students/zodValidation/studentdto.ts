import z from 'zod';
export const studentSchema = z.object({
    email: z.string().email(),
    full_name: z.string(),
    phone_no: z.number(),
    address: z.string(),
    department: z.enum(['admin', 'electronic', 'finance']),
}).required();

export type Studentdto = z.infer<typeof studentSchema>;