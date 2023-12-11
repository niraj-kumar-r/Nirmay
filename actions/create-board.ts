"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const CreateBoardSchema = z.object({
    title: z.string().min(1),
});

export async function create(formData: FormData) {
    const { title } = CreateBoardSchema.parse({
        title: formData.get("title"),
    });

    await db.board.create({
        data: {
            title,
        },
    });
}
