import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("top-10", { expire: 5 });

  return NextResponse.json({ text: "success" });
}
