import { CoffeeResponse } from "@/app/types";
import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 産地国全取得
export const GET = async (req: Request, res: NextResponse<CoffeeResponse>) => {
  try {
    const country = await supabase.from("country").select(`*`);

    return NextResponse.json(
      { message: "Success", data: country.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// 産地国登録API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const country = await req.json();
    const post = await supabase.from("country").insert(country);
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
