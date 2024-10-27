
import connectDB from "@/app/lib/db";
import Task from "@/models/employeeModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request) {
    try {
        // Fetch all users from the database
        const tasks = await Task.find({}); // Exclude password field
        return NextResponse.json({
            message: "Tasks fetched successfully",
            data: tasks,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

