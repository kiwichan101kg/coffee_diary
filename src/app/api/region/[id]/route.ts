import { CoffeeResponse } from "@/app/types";
import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 国別_産地地域取得
export const GET = async (req: Request, res: NextResponse<CoffeeResponse>) => {
  try {
    const country_id: number = parseInt(req.url.split("/region/")[1]);
    const country = await supabase
      .from("region")
      .select(`*,country_id(name)`)
      .eq("country_id", country_id);

    return NextResponse.json(
      { message: "Success", data: country.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// 産地地域登録API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const country_id: number = parseInt(req.url.split("/region/")[1]);
    const { name } = await req.json();
    const post = await supabase.from("region").insert({ name, country_id });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
