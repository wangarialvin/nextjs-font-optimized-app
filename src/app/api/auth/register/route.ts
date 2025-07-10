import { NextResponse } from "next/server";

// Dummy in-memory user store for demonstration
const users = new Map();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (users.has(email)) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    // In real app, hash password and store securely
    users.set(email, { name, email, password });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
