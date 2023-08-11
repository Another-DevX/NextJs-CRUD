import connectDB from '@/app/api/db';
import Task from '@/models/task';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  connectDB();
  const tasks = await Task.find();
  return NextResponse.json({ message: tasks });
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  const newTask = await new Task({
    title,
    description,
  }).save();
  console.log(newTask);
  try {
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(err.message, { status: 400 });
  }
  return NextResponse.json(newTask, { status: 201 });
}
