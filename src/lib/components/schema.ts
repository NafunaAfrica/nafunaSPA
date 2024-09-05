import { z } from "zod";
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

// export const feedback = z.object({
//     fullname: z.string().min(2),
//     organisation: z.string().min(2),
//     Position: z.string().min(2),
//     number: z.string().min(2),
//     email: z.string().email(),
//     Product: z.string().min(1),
//     Message: z.string().min(2),
//     Budget: z.number().min(1),
//     // file: z.string(),
//      // Assuming the file field is a string representation of the file path or URL
// });

export const feedback = z.object({
    fullname: z.string().min(2).optional(),
    organisation: z.string().min(2).optional(),
    Position: z.string().min(2).optional(),
    number: z.string().min(2).optional(),
    email: z.string().email().optional(),
    Product: z.string().min(1).optional(),
    Message: z.string().min(2).optional(),
    Budget: z.string().min(1).optional(),
});

export const registerSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string()
})
.refine((data) => data.password === data.passwordConfirm,
    {
        message: "Passwords do not match",
        path: ["passwordConfirm"]
    }
);

