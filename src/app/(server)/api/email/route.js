import dbConnect from "../../lib/dbConnect";
import Email from "../../models/Email";


function handleError(err) {
  console.error(err);
  return {
    success: false,
    message: err.message || "An error occurred",
  };
}

export async function POST(request) {
  await dbConnect();
  try {
    const userData = await request.json();
    const isExistUser = await Email.findOne({ email: userData.email });
    if (isExistUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "This Email already exists",
        }),
        { status: 400 }
      );
    }
    const result = await Email.create(userData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "User created successfully",
        data: result,
      }),
      { status: 201 }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const result = await Email.find();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Users retrieved successfully",
        data: result,
      }),
      { status: 200 }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
