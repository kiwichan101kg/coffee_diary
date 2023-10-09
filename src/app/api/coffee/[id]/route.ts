import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// id指定取得
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
