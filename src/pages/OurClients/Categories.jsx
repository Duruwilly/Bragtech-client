export const Categories = ({ title, items }) => (
  <div>
    <div className="w-full py-5 pl-8 bg-[#222222] rounded-[5px] border border-[#B50A0C]">
      <p className="text-[#D7D7D7] text-3xl font-bold break-words">{title}</p>
    </div>
    <div className="flex flex-wrap gap-8 mt-10 mb-8">
      {items.map((item, index) => (
        <div className="" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="flex justify-center items-center">
            <span className="text-center text-[#404040] text-xs">
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
