import { NextResponse } from 'next/server';
import connectDB from '@/app/api/db';
import Task from '@/models/task';

export async function GET(request: Request, { params }: any) {
  connectDB();
  try {
    const currentTask = await Task.findById(params.id);
    console.log(currentTask);
    if (!currentTask)
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    return NextResponse.json(currentTask, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(err.message, { status: 400 });
  }
}

export async function PUT(request: Request, { params }: any) {
  const { title, description } = await request.json();

  try {
    const TaskUpdated = await Task.findByIdAndUpdate(
      params.id,
      {
        title,
        description,
      },
      { new: true }
    );
    console.log(TaskUpdated);
    if (!TaskUpdated)
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    return NextResponse.json(TaskUpdated, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(err.message, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const TaskDeleted = await Task.findByIdAndDelete(params.id);
    console.log(TaskDeleted);
    if (!TaskDeleted)
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    return NextResponse.json(TaskDeleted, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(err.message, { status: 400 });
  }
}
