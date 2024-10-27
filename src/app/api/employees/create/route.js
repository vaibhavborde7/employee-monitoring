
import connectDB from "@/app/lib/db";
import Employee from "@/models/employeeModel";
import { NextResponse } from "next/server";


connectDB();

export async function POST(request) {
    try {
        // Parse the JSON body from the request
        const data = await request.json();

        // Create a new emp post with the provided data
        const newEmployee = new Employee(data);

        // Save the new emp post to the database
        const savedEmployee = await newEmployee.save();

        return NextResponse.json({
            message: "Employee created successfully",
            data: savedEmployee,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}