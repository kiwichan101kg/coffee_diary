import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// コーヒーid指定取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/coffee/")[1]);
    const coffee = await supabase
      .from("coffee")
      .select(
        `*,
        country_id (
          name
        ),
        region_id (
          name
        ),
        shop_id (
          name
        )
  `
      )
      .eq("id", id);

    return NextResponse.json(
      { message: "Success", data: coffee.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// コーヒーid指定変更
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/coffee/")[1]);
    const edited = await req.json();
    const result = await supabase.from("coffee").update(edited).eq("id", id);

    return NextResponse.json(
      { message: "Success", data: result.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// コーヒーid指定削除
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/coffee/")[1]);
    const result = await supabase.from("coffee").delete().eq("id", id);

    return NextResponse.json(
      { message: "Success", data: result.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
