import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Conneted To Mongodb Databse ${conn.connection.host}`
//     );
//   } catch (error) {
//     console.log(`Errro in Mongodb ${error}`);
//   }
// };

// export default connectDB;



const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

 export default connectDB;
