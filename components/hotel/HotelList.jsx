import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
  const allHotels = await getAllHotels(destination, checkin, checkout);
  console.log(allHotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels?.map((hotel) => (
          <HotelCard
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            hotelInfo={hotel}
            key={hotel.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
