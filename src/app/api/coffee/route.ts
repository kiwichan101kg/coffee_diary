import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 全取得
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const coffee = await supabase
      .from("coffee")
      .select(`brand,country_id(name)`);

    return NextResponse.json(
      { message: "Success", data: coffee.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
