
export default function Home() {
    return (
      <div className="bg-[rgb(227,228,241)] mt-[20px] h-[1000px] relative">
        <h1 className="w-[250px] text-[18px] m-[20px] font-plusJakarta font-bold text-gray-500 absolute top-1/4 left-1/2 transform -translate-x-1/2">
          This board is empty. Create a new column to get started.
        </h1>
        <button className="bg-purple-500 mt-[10px] text-[17px] p-[10px] rounded-3xl font-plusJakarta text-white absolute  top-[33%]  left-1/2 transform -translate-x-1/2">
          + Add New Column
        </button>
      </div>
    )
  }
  