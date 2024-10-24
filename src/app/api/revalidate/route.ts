import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  const revalidateAll = request.nextUrl.searchParams.get("all") === "true";

  if (!path && !revalidateAll) {
    return NextResponse.json(
      { error: "Path parameter is required unless revalidating all" },
      { status: 400 }
    );
  }

  try {
    if (revalidateAll) {
      revalidatePath("/");
      return NextResponse.json({
        revalidated: true,
        all: true,
        now: Date.now(),
      });
    } else if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
