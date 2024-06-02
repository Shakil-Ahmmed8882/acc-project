import { UserModel } from "@/app/(server)/models/User";
import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";

export async function POST(request) {
  await dbConnect();
  try {
    const user = await request.json();
    //
    const result = await UserModel.create(user);

    return Response.json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
export async function GET() {
  await dbConnect();
  try {
    //
    const result = await UserModel.find();

    return Response.json({
      success: true,
      message: "User retrieve successfully",
      data: result,
    });
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
