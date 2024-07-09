import { getNames } from "@/actions/getNames";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const names = await getNames();
    return NextResponse.json({ names });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 },
    );
  }
}
