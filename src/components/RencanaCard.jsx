export const RencanaCard = ({
  imageUrl = "background3.jpg",
  day = "01",
  title = "Tiba di Bali",
  desc = "Check-in Hotel",
}) => {
  const image = require(`/public/images/${imageUrl}`);
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="group bg-center shadow min-w-[320px] min-h-[380px] max-w-[320px] rounded-tr-[45px] rounded-bl-[45px] mb-12 relative group overflow-hidden transition-all"
    >
      <div className="absolute inset-0 z-0 transition-all object-cover ">
        <img
          src={image}
          className="w-full h-full group-hover:scale-105 object-cover transition-all"
          alt="gambar"
        />
      </div>
      <div className="bg-white min-h-[50%] w-full bottom-0 left-0 z-10 absolute">
        <div className="bg-gray-100 rounded-br-xl max-w-[80px] min-h-[50px] top-0 left-0 flex justify-center items-center">
          <p className="font-bold text-2xl">{day}</p>
        </div>

        <div className="px-6 py-4">
          <p className="text-black text-xl">{title}</p>
          <p className="mb-6 text-black font-normal text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default RencanaCard;
