import { NextResponse } from 'next/server';
import connectDB from '@/app/api/db';
import task from '@/models/task';

export async function GET(request: NextResponse, { params }: any) {
  connectDB();
  console.debug(params.id);
  return NextResponse.json({ message: `La tarea ${params.id} no existe` });
}

export async function POST() {
  // const { title, description } = req.body;
  // const newTask = new ModelTask({ title, description });
  // await newTask.save();
  // return NextResponse.redirect("/tasks");
  return NextResponse.json({
    message: 'Actualmente no es posible añadir tareas',
  });
}

export async function PUT(request: NextResponse, { params }: any) {
  return NextResponse.json({
    message: 'Actualmente no es posible actualizar tareas',
  });
}

export async function DELETE(request: NextResponse, { params }: any) {
  return NextResponse.json({
    message: 'Actualmente no es posible eliminar tareas',
  });
}
