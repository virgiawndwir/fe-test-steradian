export interface Car {
  car_id: BigInteger;
  car_name: string;
  day_rate: string;
  month_rate: string;
  image: string;
}

export interface Order {
  order_id: BigInteger;
  order_date: Date;
  pickup_date: Date;
  dropoff_date: Date;
  pickup_location: string;
  dropoff_location: string;
}