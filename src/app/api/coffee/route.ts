import { CoffeeReqest, CoffeeResponse } from "@/app/types";
import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 全取得
export const GET = async (req: Request, res: NextResponse<CoffeeResponse>) => {
  try {
    const coffee = await supabase
      .from("coffee")
      .select(`id,brand,country_id(name)`);

    return NextResponse.json(
      { message: "Success", data: coffee.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

// コーヒー登録API
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const coffee: CoffeeReqest = await req.json();
    const post = await supabase.from("coffee").insert(coffee);
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
