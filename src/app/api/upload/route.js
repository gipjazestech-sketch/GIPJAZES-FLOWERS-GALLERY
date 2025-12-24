import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Upload to Vercel Blob
        const blob = await put(file.name, file, {
            access: 'public',
        });

        return NextResponse.json({ success: true, url: blob.url });
    } catch (e) {
        console.error('Upload error details:', e);
        return NextResponse.json({
            error: 'Upload failed',
            details: e.message
        }, { status: 500 });
    }
}
