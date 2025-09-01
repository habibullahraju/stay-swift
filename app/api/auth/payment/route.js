import { bookingModel } from "@/models/booking-model";
import { dbConnect } from "@/service/mongo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { userId, hotelId, checkin, checkout } = await request.json();
  await dbConnect();
  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout,
  };
  try {
    await bookingModel.create(payload);
    return new NextResponse("A new booking has been made!", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
