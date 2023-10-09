import { CoffeeResponse } from "@/app/types";
import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 全購入店取得
export const GET = async (req: Request, res: NextResponse<CoffeeResponse>) => {
  try {
    const shop = await supabase.from("shop").select(`*`);

    return NextResponse.json(
      { message: "Success", data: shop.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// 購入店登録API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name } = await req.json();
    const post = await supabase.from("shop").insert({ name });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
