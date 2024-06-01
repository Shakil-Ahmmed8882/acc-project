import dbConnect from "@/lib/dbConnect";
import { handleError } from "@/lib/utils";
import { UserModel } from "@/models/User";

export async function POST(request) {
  await dbConnect();
  try {
    const user = await request.json();
    console.log(user);
// 
const result = await UserModel.create(user)

    return Response.json({
        success:true,
        message:"User created successfully",
        data: result,
    })
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
