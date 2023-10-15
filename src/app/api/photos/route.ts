import { CoffeeReqest, CoffeeResponse } from "@/app/types";
import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";

// 画像取得
export const GET = async (req: Request, res: NextResponse<any>) => {
  try {
    // const data = await supabase.storage.getBucket("photos");
    // console.log(data);

    // 画像の名前を指定
    const publicURL = supabase.storage
      .from("photos")
      .getPublicUrl("3c6a43c1-a6e7-47bd-b5fc-2599aea3074c/image.jpeg");
    console.log(publicURL);

    return NextResponse.json(
      { message: "Success", data: publicURL },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
