import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }

    let token = process.env.BLOB_READ_WRITE_TOKEN;
    
    // Fallback: manually read the root .env file if process.env is empty
    if (!token) {
      try {
        const envPath = path.resolve(process.cwd(), '../../.env');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/BLOB_READ_WRITE_TOKEN="?([^"\n\r]+)"?/);
        if (match) {
          token = match[1];
        }
      } catch (e) {
        console.error("Failed to read root .env file manually", e);
      }
    }

    if (!token) {
        console.error("BLOB_READ_WRITE_TOKEN is missing! Current CWD:", process.cwd());
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const blob = await put(file.name, file, {
      access: 'public',
      token: token,
      allowOverwrite: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
